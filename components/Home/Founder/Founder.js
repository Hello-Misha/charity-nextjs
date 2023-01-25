import { useTranslation } from "next-i18next";

import Image from "next/image";

import classes from "./Founder.module.scss";

// import FounderX1 from "../../../../img/Founder-x1.png";
// import FounderX2 from "../../../../img/Founder-x2.png";

function Founder() {
  const { t } = useTranslation("home");
  return (
    <section className={classes.section}>
      <article className={classes.section__textBlock}>
        <h2 className={` ${classes.section__textBlock__title} Title`}>
          {t("founder.title")}
        </h2>
        <p
          className={` ${classes.section__textBlock__paragraph} Text DarkBlue`}
        >
          {t("founder.text")}
        </p>
      </article>

      <Image
        src="/img/Founder-x2.png"
        // srcSet={`${FounderX1} 300w, ${FounderX2} 768w`}
        width={700}
        height={700}
        alt="doctors"
        className={classes.section__img}
      />
      <span className={classes.section__circle}></span>
    </section>
  );
}

export default Founder;
