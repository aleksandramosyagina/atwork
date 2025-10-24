import { useState, useRef, useEffect } from "react";
import styles from "./styles.module.scss";
import { ThreeDotsIcon } from "../../../../shared/ui/icons/ThreeDotsIcon";

interface User {
  id: number;
  name: string;
  city: string;
  company: string;
  avatar: string;
}

interface UserCardProps {
  user: User;
  onArchive: (id: number) => void;
  onHide: (id: number) => void;
  onEdit: (id: number) => void;
}

export const UserCard: React.FC<UserCardProps> = ({
  user,
  onArchive,
  onHide,
  onEdit,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleEdit = () => {
    onEdit(user.id);
    setIsMenuOpen(false);
  };
  const handleArchive = () => {
    onArchive(user.id);
    setIsMenuOpen(false);
  };
  const handleHide = () => {
    onHide(user.id);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <img
          src={user.avatar}
          alt={`${user.name} avatar`}
          className={styles.avatar}
        />

        <div className={styles.info}>
          <div>
            <h3 className={styles.name}>{user.name}</h3>
            <p className={styles.company}>{user.company}</p>
          </div>
          <p className={styles.city}>{user.city}</p>
        </div>
        <div className={styles.menu} ref={menuRef}>
          <button className={styles.menuButton} onClick={toggleMenu}>
            <ThreeDotsIcon />
          </button>
          {isMenuOpen && (
            <div className={`${styles.dropdown} ${styles.open}`}>
              <button onClick={handleEdit}>Редактировать</button>
              <button onClick={handleArchive}>Архивировать</button>
              <button onClick={handleHide}>Скрыть</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
