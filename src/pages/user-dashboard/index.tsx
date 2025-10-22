// import { UserList } from '../../entities/user/ui/UserList';  // Компонент списка пользователей
// import { AddUserForm } from '../../features/add-user/ui/AddUserForm';  // Форма добавления
// import { useUsersQuery } from '../../entities/user/api/queries';  // Хук для запроса данных

import UserList from "../../widgets/user-list/ui";

export const UserDashboard = () => {
  return (
    <div>
      <h1>Активные</h1>
      {/* <AddUserForm />  {/* Форма с React Hook Form + Zod */}
      {/* <UserList users={users || []} />  Список с Zustand для локального состояния */}
      <UserList />
    </div>
  );
};

export default UserDashboard; // Для удобного импорта
