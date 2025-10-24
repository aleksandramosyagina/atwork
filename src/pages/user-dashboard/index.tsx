import UserList from "../../widgets/user-list/ui";
import styles from "./styles.module.scss";

export const UserDashboard = () => {
  return (
    <div className={styles.dashboard}>
      <h1 className={styles.title}>Активные</h1>
      <UserList />
    </div>
  );
};

export default UserDashboard;
