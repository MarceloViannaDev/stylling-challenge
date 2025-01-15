import searchIcon from "../../assets/Shape.svg";
import { ButtonProps } from "./button-types";
import styles from "./Button.module.scss";

export function Button({
  text,
  variant = "default",
  disabled,
  isHovered,
  rowVariant,
}: ButtonProps) {
  const btnClass = `
    ${styles.btnBase}
    ${variant === "icon" ? styles.icon : styles.default}
    ${isHovered ? (rowVariant === "second" ? styles.hoveredSecond : styles.hovered) : ""}
  `;

  return (
    <button className={btnClass} disabled={disabled}>
      {variant === "icon" && <img src={searchIcon} alt="" className={styles.icon} />}
      <span>{text}</span>
    </button>
  );
}
