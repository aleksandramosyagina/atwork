import React from "react";
import Avatar from "../../../../assets/avatar.jpg";
import { TabButton } from "../../../../shared/ui/buttons/TabButton/TabButton";
import styles from "./styles.module.scss";

interface UserProfileTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  avatarUrl?: string;
}

export const UserProfileTabs: React.FC<UserProfileTabsProps> = ({
  activeTab,
  onTabChange,
  avatarUrl,
}) => {
  const tabs = [
    { key: "profile", label: "Данные профиля" },
    { key: "workspace", label: "Рабочее пространство" },
    { key: "privacy", label: "Приватность" },
    { key: "security", label: "Безопасность" },
  ];

  return (
    <div className={styles.profileNavigation}>
      <img
        src={avatarUrl || Avatar}
        alt="Аватар пользователя"
        className={styles.avatarImage}
      />
      {tabs.map((tab) => (
        <TabButton
          key={tab.key}
          onClick={() => onTabChange(tab.key)}
          active={activeTab === tab.key}
        >
          {tab.label}
        </TabButton>
      ))}
    </div>
  );
};
