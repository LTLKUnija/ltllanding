import React from "react";
import { useState } from "react";
import styles from "@/styles/InnerLinks.module.scss";
import Link from "next/link";
import { useTranslation } from 'next-i18next';

const InnerLinks = ({ innerLinksData }) => {
  const {t} = useTranslation('common');
  const [innerLinkActive, setInnerLinkActive] = useState(null);

  const innerLinkHandler = (linkId) => {
    setInnerLinkActive(linkId);
  };
  
  const showInnerLinks = innerLinksData.map((linkList, idx) => {
    const linkId = `${linkList.id}` 
    return (
          <div key={idx}>
               <Link key={idx}
                href={linkId}
                data-id={linkId}
                className={innerLinkActive === `${linkId}` ? styles.innerNavLinkActive : styles.innerNavLink}
                onClick={() => innerLinkHandler(`${linkId}`)}
                >{t(`${linkList.link}`)}</Link>
          </div>
    );
  });
  return <div className={styles.innerNavigationLinkList}>{showInnerLinks}</div>;
};

export default InnerLinks;
