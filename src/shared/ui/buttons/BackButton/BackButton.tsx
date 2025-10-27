import React from "react";
import styles from "./BackButton.module.scss";

interface BackButtonProps {
  onClick: () => void;
  label?: string;
}

export const BackButton: React.FC<BackButtonProps> = ({
  onClick,
  label = "Назад",
}) => {
  return (
    <button className={styles.backButton} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="21"
        viewBox="0 0 28 28"
        fill="none"
      >
        <path
          d="M13.125 14H0.875"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7 20.125L0.875 14L7 7.875"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      {label}
    </button>
  );
};
