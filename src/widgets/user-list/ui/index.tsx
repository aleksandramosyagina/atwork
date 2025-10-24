import UserCard from "../../../features/user/ui/UserCard";
import { useUsersQuery } from "../../../entitites/user/api/queries";
import styles from "./styles.module.scss";
import avatar from "./../../../assets/avatar.jpg";

interface User {
  id: number;
  name: string;
  city: string;
  company: string;
  avatar: string;
}

export const UserList = () => {
  const { data: apiUsers, isLoading, error } = useUsersQuery();

  const users: User[] = apiUsers
    ? apiUsers.slice(0, 6).map((apiUser) => ({
        id: apiUser.id,
        name: apiUser.name,
        city: apiUser.address.city,
        company: apiUser.company.name,
        avatar: avatar,
      }))
    : [];
  const handleArchive = (id: number) => console.log("Архивировать", id);
  const handleHide = (id: number) => console.log("Скрыть", id);
  const handleEdit = (id: number) => console.log("Редактировать", id);

  if (isLoading) return <div>Загрузка пользователей...</div>;
  if (error) return <div>Ошибка загрузки: {error.message}</div>;

  return (
    <div className={styles.container}>
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onArchive={handleArchive}
          onHide={handleHide}
          onEdit={handleEdit}
        />
      ))}
    </div>
  );
};

export default UserList;
