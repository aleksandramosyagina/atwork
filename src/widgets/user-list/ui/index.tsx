import UserCard from "../../../features/user/ui/UserCard";
import { useUsersQuery } from "../../../entitites/user/api/queries"; 

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
        avatar: "https://via.placeholder.com/80?text=Avatar", 
      }))
    : [];
  const handleArchive = (id: number) => console.log("Архивировать", id);
  const handleHide = (id: number) => console.log("Скрыть", id);

  if (isLoading) return <div>Загрузка пользователей...</div>;
  if (error) return <div>Ошибка загрузки: {error.message}</div>;

  return (
    <div>
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onArchive={handleArchive}
          onHide={handleHide}
        />
      ))}
    </div>
  );
};

export default UserList; 