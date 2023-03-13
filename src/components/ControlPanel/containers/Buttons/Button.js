import styles from "../../components/ControlPanelView/styles.module.css";

const Button = (props) => {
    return (
        <button className={styles.ControlButton} onClick={props.onClick}>{props.text}</button>
    );
}

export { Button };