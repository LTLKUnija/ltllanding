import Image from "next/image";
import styles from "@/styles/Home.module.scss";

function LandingArticle({ title, text, side, image }) {
  return (
    <article
      className={
        side ? styles.beneficialArticle : styles.beneficialArticleMirror
      }
    >
      <div className={styles.imageBlock}>
        <Image
          src={`http:${image.fields.file.url}`}
          alt={image.fields.title}
          style={{
            width: "auto",
            height: "auto",
          }}
        />
      </div>
      <div className={styles.articleBlock}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </article>
  );
}

export default LandingArticle;