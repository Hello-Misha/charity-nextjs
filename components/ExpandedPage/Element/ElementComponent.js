import Image from "next/image";
import classes from "./ElementComponent.module.scss";

function ElementComponent(props) {
  return (
    <div className={classes.element}>
      <Image
        src={props.img}
        alt="testImg"
        width={700}
        height={700}
        placeholder="blur"
      />
      <div className={classes.element__text}>
        <h2 className={`Title DarkBlue`}>{props.title}</h2>
        <a href={props.href} className={`Text-bold DarkBlue`}>
          {props.linkText}
        </a>
      </div>
    </div>
  );
}

export default ElementComponent;
