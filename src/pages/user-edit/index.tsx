import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EditUserForm } from "../../features/user/ui/EditUserForm.tsx";
import { UserProfileTabs } from "../../features/user/ui/UserProfileTabs";
import { BackButton } from "../../shared/ui/buttons/BackButton/BackButton.tsx";
import styles from "./styles.module.scss";

export const EditUserPage = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className={styles.pageContainer}>
      <BackButton onClick={handleBack} />
      <div className={styles.contentWrapper}>
        <UserProfileTabs activeTab={activeTab} onTabChange={setActiveTab} />
        {activeTab === "profile" && <EditUserForm />}
      </div>
    </div>
  );
};
