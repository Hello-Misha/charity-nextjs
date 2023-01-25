import classes from "./ExpandedPageComponent.module.scss";

import ElementComponent from "./Element/ElementComponent";

function ExpandedPageComponent(props) {
  const { t } = props.page;
  const aboutArr = t(`about`, {
    returnObjects: true,
  });

  return (
    <section className={classes.section}>
      <h2 className={`Title DarkBlue`}>{t(`aboutTitle`)}</h2>
      <div className={classes.section__container}>
        {/* ELEMENT START*/}

        {aboutArr.map((elem, index) => {
          return (
            <ElementComponent
              img={props.img[index]}
              title={elem.title}
              href={`#`}
              linkText={elem.linkText}
              key={index}
            />
          );
        })}
        {/* ELEMENT END*/}
      </div>
    </section>
  );
}

export default ExpandedPageComponent;
