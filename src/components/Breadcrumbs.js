import Link from "next/link";
import React from "react";
import { useTranslation } from "next-i18next";

const Breadcrumbs = ({ business, area, page }) => {
  const { t } = useTranslation("common");
  return (
    <div>
      {business ? (
        <Link href="/business" className="readMoreLink breadcrumbsLink">
          {`${t("headerNavLinks.business")}`}
        </Link>
      ) : (
        <Link href="/" className="readMoreLink breadcrumbsLink">
          {`${t("headerNavLinks.private")}`}
        </Link>
      )}{" "}
      &#x3e; {area} &#x3e; {page}
    </div>
  );
};

export default Breadcrumbs;
