import styles from "./FormInputUI.module.css";

const FormInputUI = (props) => {
  return (
    <div className={`${styles.card} ${props.className}`}>{props.children}</div>
  );
};

export default FormInputUI;
