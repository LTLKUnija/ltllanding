import React from "react";

export const previewTextMaker = (text, limit = null) => {
  let wordCount = 0;
  let isLimitReached = false;

  const normalizedText = text
    .replace(/”|“/g, '"')
    .replace(/(<br\/>\s*)+/g, " ");

  const addWords = (text) => {
    const words = text.split(" ");
    let wordsToAdd = [];
    for (let word of words) {
      if (word.trim() === "") continue;
      if (limit && wordCount >= limit) {
        isLimitReached = true;
        break;
      }
      wordsToAdd.push(word);
      wordCount++;
    }
    return wordsToAdd.join(" ");
  };

  const plainText = normalizedText.replace(/<\/?[^>]+(>|$)/g, "");
  return addWords(plainText);
};

export const formatText = (text) => {
  const normalizedText = text.replace(/”|“/g, '"');

  return normalizedText.split("<br/>").map((paragraph, idx) => {
    const parts = paragraph
      .split(
        /(<b>.*?<\/b>|<u>.*?<\/u>|<i>.*?<\/i>|<link url=".*?">.*?<\/link>)/
      )
      .map((part, partIdx) => {
        if (/<b>(.*?)<\/b>/.test(part)) {
          const match = part.match(/<b>(.*?)<\/b>/);
          return <b key={partIdx}>{match[1]}</b>;
        }
        if (/<u>(.*?)<\/u>/.test(part)) {
          const match = part.match(/<u>(.*?)<\/u>/);
          return <u key={partIdx}>{match[1]}</u>;
        }
        if (/<i>(.*?)<\/i>/.test(part)) {
          const match = part.match(/<i>(.*?)<\/i>/);
          return <i key={partIdx}>{match[1]}</i>;
        }
        if (/<link url="(.*?)">(.*?)<\/link>/.test(part)) {
          const match = part.match(/<link url="(.*?)">(.*?)<\/link>/);
          return (
            <a
              href={match[1]}
              key={partIdx}
              target="_blank"
              rel="noopener noreferrer"
            >
              {match[2]}
            </a>
          );
        }
        return part;
      });

    return <p key={idx}>{parts}</p>;
  });
};

export const loanFormDataMaker = (inputs) => {
  const formData = new FormData();

  const keys = {
    loanAmount: process.env.NEXT_PUBLIC_LOANFORM_LOANAMOUNT,
    loanTerm: process.env.NEXT_PUBLIC_LOANFORM_LOANTERM,
    firstName: process.env.NEXT_PUBLIC_LOANFORM_FIRSTNAME,
    lastName: process.env.NEXT_PUBLIC_LOANFORM_LASTNAME,
    email: process.env.NEXT_PUBLIC_LOANFORM_EMAIL,
    companyName: process.env.NEXT_PUBLIC_LOANFORM_COMPANYNAME,
    phone: process.env.NEXT_PUBLIC_LOANFORM_PHONE,
  };

  if (Object.values(keys).some((v) => !v)) {
    console.warn("Some env keys are missing!");
  }

  formData.append(keys.loanAmount, inputs.loanAmount);
  formData.append(keys.loanTerm, inputs.loanTerm);
  formData.append(keys.firstName, inputs.firstName);
  formData.append(keys.lastName, inputs.lastName);
  formData.append(keys.email, inputs.email);
  formData.append(keys.phone, inputs.phoneNumber);
  if (inputs.companyName === "") {
    formData.append(keys.companyName, "private");
  } else {
    formData.append(keys.companyName, inputs.companyName);
  }

  return formData;
};

export const isLocalhost = (request) => {
  const hostname = request?.nextUrl?.hostname || (request?.headers?.get?.("host") || "").split(":")[0];
  const normalizedHost = (hostname || "").toLowerCase();
  return ["localhost", "127.0.0.1", "::1"].includes(normalizedHost)
    || normalizedHost.endsWith(".localhost")
    || normalizedHost.endsWith(".local");
}
