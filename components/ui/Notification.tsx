import ReactDOM from "react-dom";
import classes from "./notification.module.css";

type NotificationType = {
  title: string;
  message: string;
  status: string;
};

function Notification({ title, message, status }: NotificationType) {
  let statusClasses = "";

  if (status === "success") {
    statusClasses = classes.success;
  }

  if (status === "error") {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  return ReactDOM.createPortal(
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById("notification") as HTMLDivElement
  );
}

export default Notification;
