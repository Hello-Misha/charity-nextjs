import { useTranslation } from "next-i18next";

import Text from "../../TechComponents/HomePageText/HomePageText";

import Image from "next/image";

import classes from "./Education.module.scss";

import Girl from "../../../public/img/Girl-x2.png";

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
        src={Girl}
        width={700}
        height={700}
        alt="Girl learning"
        placeholder="blur"
        className={classes.section__img}
      />
    </section>
  );
}
