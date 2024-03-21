import { useState } from "react";
import { useRouter } from "next/router";

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
                          {item}
                        </div>
                      ))
                    : question.bodyEn.map((item, idx) => (
                        <div className="item" key={idx}>
                          {item}
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
                              ? item.body.map((item, idx) => {
                                  return <div key={idx}>{item}</div>;
                                })
                              : item.bodyEn.map((item, idx) => {
                                  return <div key={idx}>{item}</div>;
                                })}
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
