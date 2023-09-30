import React, { useEffect, useState } from "react";
import styles from "./Alert.module.css";

const Alert = (props) => {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false); // Закрываем алерт через 5 секунд (можете изменить время)
    }, 2000);

    // Очистка таймера при размонтировании компонента
    return () => clearTimeout(timer);
  }, []);

  return showAlert ? (
    <div className={styles.alert}>{props.children}</div>
  ) : null;
};

export default Alert;
