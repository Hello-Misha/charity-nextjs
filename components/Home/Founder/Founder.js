import { useTranslation } from "next-i18next";

import Image from "next/image";

import classes from "./Founder.module.scss";

import FounderX2 from "../../../public/img/Founder-x2.png";

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
        src={FounderX2}
        width={700}
        height={700}
        alt="founder"
        placeholder="blur"
        className={classes.section__img}
      />
      <span className={classes.section__circle}></span>
    </section>
  );
}

export default Founder;
