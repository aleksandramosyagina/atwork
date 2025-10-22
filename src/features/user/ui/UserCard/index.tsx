import React from "react";
import styles from "./styles.module.scss";

interface UserCardProps {
  user: {
    id: number;
    name: string;
    city: string;
    company: string;
    avatar: string; 
  };
  onArchive: (id: number) => void;
  onHide: (id: number) => void;
}

export const UserCard: React.FC<UserCardProps> = ({
  user,
  onArchive,
  onHide,
}) => {
  return (
    <div className={styles.card}>
      <img
        src={user.avatar}
        alt={`${user.name} avatar`}
        className={styles.avatar}
      />

      <div className={styles.info}>
        <h3 className={styles.name}>{user.name}</h3>
        <p className={styles.city}>{user.city}</p>
        <p className={styles.company}>{user.company}</p>
      </div>

      <div className={styles.menu}>
        <button
          className={styles.menuButton}
          onClick={() => {
          }}
        >
          &#8942;{" "}
        </button>
        <div className={styles.dropdown}>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
