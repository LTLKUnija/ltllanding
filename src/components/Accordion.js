import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import parse from "html-react-parser";

function parseRichText(str) {
  return parse(str, {
    replace: (domNode) => {
      if (domNode.name === "a") {
        const href = domNode.attribs?.href;
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="readMoreLink faqLink"
          >
            {Array.isArray(domNode.children)
              ? domNode.children.map((child, idx) =>
                  typeof child.data === "string" ? child.data : null
                )
              : null}
          </a>
        );
      }

      if (domNode.name === "email") {
        const email = domNode.children?.[0]?.data || "";
        return (
          <a href={`mailto:${email}`} className="faqEmailLink">
            {email}
          </a>
        );
      }
    },
  });
}

export default function Accordion({ faqData, singleLevel }) {
  const router = useRouter();
  const [data, setData] = useState(faqData);

  const toggleOpened = (item) => {
    return {
      ...item,
      opened: !item.opened,
    };
  };

  const openFaq = (e) => {
    const idx = e.target.dataset.idx;
    let parentidx = "";
    let temp = JSON.parse(JSON.stringify(data));

    if (e.target.dataset.parentidx) {
      parentidx = e.target.dataset.parentidx;
      temp[parentidx].bodyEn[idx] = toggleOpened(temp[parentidx].bodyEn[idx]);
    } else {
      temp[idx] = toggleOpened(temp[idx]);
    }

    setData(temp);
  };

  return (
    <>
      <div
        className={`accordionWrapper ${
          singleLevel === "false" ? "muiltiLevel" : ""
        }`}
      >
        {data.map((question, idx) => {
          return (
            <div className="ac" key={idx}>
              <div className="acHeader">
                <div
                  className="accHeaderTitle"
                  data-idx={idx}
                  onClick={(e) => openFaq(e)}
                  key={idx}
                >
                  {router.locale === "lt" ? question.header : question.headerEn}
                </div>
                <div
                  data-idx={idx}
                  onClick={(e) => openFaq(e)}
                  className="accOpenBtn"
                >
                  {question.opened ? "-" : "+"}
                </div>
              </div>
              <div className={`acPanel ${question.opened ? "opened" : ""}`}>
                {!question.hasInnerChildren
                  ? router.locale === "lt"
                    ? question.body.map((item, idx) => (
                        <div className="item" key={idx}>
                          {typeof item === "string"
                            ? parseRichText(item)
                            : null}
                        </div>
                      ))
                    : question.bodyEn.map((item, idx) => (
                        <div className="item" key={idx}>
                          {typeof item === "string"
                            ? parseRichText(item)
                            : null}
                        </div>
                      ))
                  : question.bodyEn.map((item, index) => {
                      return (
                        <div className="ac" key={index}>
                          <div className="acHeader">
                            <div
                              className="accHeaderTitle"
                              data-idx={index}
                              data-parentidx={
                                question.hasInnerChildren ? idx : undefined
                              }
                              onClick={(e) => openFaq(e)}
                            >
                              {router.locale === "lt"
                                ? question.header
                                : question.headerEn}
                            </div>
                            <div
                              data-idx={index}
                              data-parent-idx={index}
                              onClick={(e) => openFaq(e)}
                              className="accOpenBtn"
                            >
                              {item.opened ? "-" : "+"}
                            </div>
                          </div>
                          <div
                            className={`acPanel ${item.opened ? "opened" : ""}`}
                          >
                            {router.locale === "lt"
                              ? item.body.map((item, idx) => (
                                  <div key={idx}>
                                    {typeof item === "string"
                                      ? parseRichText(item)
                                      : null}
                                  </div>
                                ))
                              : item.bodyEn.map((item, idx) => (
                                  <div key={idx}>
                                    {typeof item === "string"
                                      ? parseRichText(item)
                                      : null}
                                  </div>
                                ))}
                          </div>
                        </div>
                      );
                    })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
