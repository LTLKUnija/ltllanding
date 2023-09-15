import React from "react";
import { useState } from "react";
import styles from "@/styles/InnerLinks.module.scss";
import { useRouter } from "next/router"
import lt from '@/locales/lt'
import en from '@/locales/en'
import Link from "next/link";

const InnerLinks = ({ innerLinksData }) => {

  const router = useRouter();
  const t = router.locale === 'lt' ? lt : en

  const [innerLinkActive, setInnerLinkActive] = useState(null);

  const innerLinkHandler = (linkId) => {
    setInnerLinkActive(linkId);
  };
  
  const linkTConverter = (path) => {
    if (!!path) {
      const pathArr = path.split('.');
      const length = pathArr.length;
      let result = t;
      for (let i = 0; i< length; i++) {
        result = result[pathArr[0]]
        pathArr.splice(0, 1)
      }
      return result
    }
  }
  
  const showInnerLinks = innerLinksData.map((linkList, idx) => {
    const linkId = `${linkList.id}` 
    return (
          <div key={idx}>
               <Link key={idx}
                href={linkId}
                data-id={linkId}
                className={innerLinkActive === `${linkId}` ? styles.innerNavLinkActive : styles.innerNavLink}
                onClick={() => innerLinkHandler(`${linkId}`)}
                >{linkTConverter(linkList.link)}</Link>
          </div>
    );
  });
  return <div className={styles.innerNavigationLinkList}>{showInnerLinks}</div>;
};

export default InnerLinks;
