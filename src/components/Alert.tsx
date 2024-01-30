import { ReactNode } from "react";

interface Props {
  children: string;
  colour?: "primary" | "secondary" | "danger" | "warning";
  onClose: () => void;
}

const Alert = ({ children, colour = "primary", onClose }: Props) => {
  return (
    <div className={`alert alert-${colour} alert-dismissible`} role="alert">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
