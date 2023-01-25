import Image from "next/image";
import { useTranslation } from "next-i18next";
import classes from "./Support.module.scss";
import supportImage from "../../../public/img/support.png";

function Support() {
  const { t } = useTranslation("home");
  return (
    <section className={classes.section}>
      <Image
        src={supportImage}
        width={500}
        height={500}
        alt="Support"
        // placeholder="blur"
        className={classes.section__img}
      />

      <div className={` ${classes.section__block}`}>
        <h2 className={` ${classes.section__block__title} Title DarkBlue`}>
          {t("support.title")}
        </h2>
        <div>
          <div className={`${classes.section__block__paragraph}`}>
            <p
              className={`${classes.section__block__paragraph__p} Text DarkBlue`}
            >
              {t("support.text")}
            </p>
            <p className={`Text DarkBlue`}>{t("support.iban")}</p>
            <p className={`Text DarkBlue`}>{t("support.bank")}</p>
          </div>
          <div className="Button-blue Text-bold DarkBlue">
            {t("support.btn")}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Support;
