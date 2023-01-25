import { useTranslation } from "next-i18next";

import Image from "next/image";

import classes from "./Partners.module.scss";

// import SmileTrainX1 from "../../../img/SmileTrain-X1.png";
// import SmileTrainX2 from "../../../img/SmileTrain-x2.png";
// import BeyondWordsX1 from "../../../img/BeyondWords-X1.png";
// import BeyondWordsX2 from "../../../img/BeyondWords-x2.png";

function Partners() {
  const { t } = useTranslation("home");
  return (
    <section className={classes.section}>
      <div className={`${classes.section__partner}`}>
        <Image
          src="/img/SmileTrain-X1.png"
          srcSet={`/img/SmileTrain-X1.png 300w, /img/SmileTrain-X2.png 768w`}
          width={500}
          height={500}
          alt="SmileTrain logo"
          className={`${classes.section__partner__img}`}
        />

        <p className={`Text White ${classes.section__partner__text} right`}>
          {t("partners.partner_1")}
        </p>
        <span
          className={`${classes.section__circle} ${classes.section__CirclePosition_1}`}
        ></span>
      </div>

      <div className={`${classes.section__partner}`}>
        <p className={`Text White ${classes.section__partner__text} left`}>
          {t("partners.partner_2")}
        </p>

        <Image
          src="/img/BeyondWords-X1.png"
          srcSet={`/img/BeyondWords-X1.png" 300w, /img/BeyondWords-X2.png" 768w`}
          width={500}
          height={500}
          alt="BeyondWords logo"
          className={`${classes.section__partner__img}`}
        />
        <span
          className={`${classes.section__circle} ${classes.section__CirclePosition_2}`}
        ></span>
      </div>
    </section>
  );
}

export default Partners;
