import { useState } from "react";

export default function Accordion({ faqData, singleLevel }) {
  const [data, setData] = useState(faqData);

  const openFaq = (e) => {
    const idx = e.target.dataset.idx;
    let parentIdx = "";
    let temp = [...data];

    if (e.target.dataset.parentIdx) {
      parentIdx = e.target.dataset.parentIdx;
      temp[parentIdx].body[idx].opened = !temp[parentIdx].body[idx].opened;
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
                >
                  {question.header}
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
                  ? question.body.map((item, idx) => {
                      return (
                        <div className="item" key={idx}>
                          {item}
                        </div>
                      );
                    })
                  : question.body.map((item, index) => {
                      return (
                        <div className="ac" key={index}>
                          <div className="acHeader">
                            <div
                              className="accHeaderTitle"
                              data-idx={index}
                              data-parent-idx={idx}
                              onClick={(e) => openFaq(e)}
                            >
                              {item.header}
                            </div>
                            <div
                              data-idx={index}
                              data-parent-idx={idx}
                              onClick={(e) => openFaq(e)}
                              className="accOpenBtn"
                            >
                              {item.opened ? "-" : "+"}
                            </div>
                          </div>
                          <div
                            className={`acPanel ${item.opened ? "opened" : ""}`}
                          >
                            {item.body}
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
