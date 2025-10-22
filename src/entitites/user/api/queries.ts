import { useQuery } from "@tanstack/react-query";

interface ApiUser {
  id: number;
  name: string;
  address: { city: string };
  company: { name: string };
}

export const useUsersQuery = () => {
  return useQuery({
    queryKey: ["users"], 
    queryFn: async (): Promise<ApiUser[]> => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      if (!response.ok) {
        throw new Error("Ошибка загрузки пользователей");
      }
      return response.json();
    },
    staleTime: 5 * 60 * 1000, 
  });
};
