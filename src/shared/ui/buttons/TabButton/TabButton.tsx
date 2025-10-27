import React from "react";
import styles from "./TabButton.module.scss";

interface TabButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  children: React.ReactNode;
}

export const TabButton: React.FC<TabButtonProps> = ({
  active = false,
  children,
  className = "",
  ...props
}) => {
  const buttonClass = `${styles.button} ${active ? styles.active : ""} ${className}`;

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};
