import { useState } from "react";
import { useRouter } from "next/router";

export default function Accordion({ faqData, singleLevel }) {
  const router = useRouter();

  const [data, setData] = useState(faqData);

  const openFaq = (e) => {
    const idx = e.target.dataset.idx;
    let parentidx = "";
    let temp = [...data];

    if (e.target.dataset.parentidx) {
      parentidx = e.target.dataset.parentidx;
      temp[parentidx].body[idx].opened = !temp[parentidx].body[idx].opened;
    } else {
      temp[idx].opened = !temp[idx].opened;
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
                  {router.locale === "lt" ? question.headerLT : question.header}
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
                    ? question.bodyLT.map((item, idx) => (
                        <div className="item" key={idx}>
                          {item}
                        </div>
                      ))
                    : question.body.map((item, idx) => (
                        <div className="item" key={idx}>
                          {item}
                        </div>
                      ))
                  : question.body.map((item, index) => {
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
                                ? question.headerLT
                                : question.header}
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
                              ? item.bodyLT.map((item, idx) => {
                                  return <div key={idx}>{item}</div>;
                                })
                              : item.body.map((item, idx) => {
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
