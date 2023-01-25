import { useTranslation } from "next-i18next";

import Text from "../../TechComponents/HomePageText/HomePageText";

import Image from "next/image";

import classes from "./Medicine.module.scss";

import Doctors from "../../../public/img/Doctors-x2.png";

export default function Medecine() {
  const { t } = useTranslation("home");

  return (
    <section className={classes.section}>
      <div className={classes.section__textBlock}>
        <Text
          title={t("medicine.title")}
          text={t("medicine.text")}
          link="/medicine"
          btn={t("medicine.btn")}
        />
      </div>
      <Image
        src={Doctors}
        // srcSet={`/img/Doctors-x1.png 300w, /img/Doctors-x2.png 768w`}
        width={700}
        height={700}
        alt="doctors"
        placeholder="blur"
        className={classes.section__img}
      />
      <span className={classes.section__circle}></span>
    </section>
  );
}
