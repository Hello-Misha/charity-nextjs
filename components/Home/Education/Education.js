import { useTranslation } from "next-i18next";

import Text from "../../TechComponents/HomePageText/HomePageText";

import Image from "next/image";

import classes from "./Education.module.scss";

export default function Education() {
  const { t } = useTranslation("home");

  return (
    <section className={classes.section}>
      <div className={classes.section__textBlock}>
        <Text
          title={t("education.title")}
          text={t("education.text")}
          link="/education"
          btn={t("education.btn")}
        />
      </div>
      <span className={classes.section__circle}></span>
      <Image
        src="/img/Girl-x1.png"
        srcSet={`/img/Girl-x1.png 300w, /img/Girl-x2.png 768w`}
        width={700}
        height={700}
        alt="Girl learning"
        className={classes.section__img}
        id="medicineImg"
      />
    </section>
  );
}
