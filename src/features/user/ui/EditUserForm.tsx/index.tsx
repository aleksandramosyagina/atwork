import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useUsersQuery } from "../../../../entitites/user/api/queries";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { userValidationSchema } from "../../../../shared/schemas/userValidationSchema";
import style from "./styles.module.scss";

interface FormData {
  name: string;
  nickname: string;
  email: string;
  phone: string;
  city: string;
  company: string;
}

export const EditUserForm = () => {
  const { id } = useParams<{ id: string }>();
  const { data: users, isLoading, error } = useUsersQuery();
  const user = users?.find((u) => u.id === Number(id));

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(userValidationSchema),
    defaultValues: {
      name: "",
      nickname: "",
      email: "",
      city: "",
      phone: "",
      company: "",
    },
  });

  useEffect(() => {
    if (user) {
      reset({
        name: user.name || "",
        nickname: user.username || "",
        email: user.email || "",
        city: user.address?.city || "",
        phone: user.phone || "",
        company: user.company?.name || "",
      });
    }
  }, [user, reset]);
  const onSubmit = (data: FormData) => {
    console.log("Отправленные данные:", data);
  };

  if (isLoading) return <div>Загрузка данных пользователя...</div>;
  if (error) return <div>Ошибка загрузки: {error.message}</div>;
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <h2 className={style.title}>Данные профиля</h2>
      <div className={style.formData}>
        <div>
          <label>Имя</label>
          <input {...register("name")} type="text" placeholder="Введите имя" />
          {errors.name && (
            <span style={{ color: "red" }}>{errors.name.message}</span>
          )}
        </div>
        <div>
          <label>Никнейм</label>
          <input
            {...register("nickname")}
            type="text"
            placeholder="Введите никнейм"
          />
          {errors.nickname && (
            <span style={{ color: "red" }}>{errors.nickname.message}</span>
          )}
        </div>

        <div>
          <label>Почта</label>
          <input
            {...register("email")}
            type="email"
            placeholder="Введите почту"
          />
          {errors.email && (
            <span style={{ color: "red" }}>{errors.email.message}</span>
          )}
        </div>
        <div>
          <label>Город</label>
          <input
            {...register("city")}
            type="text"
            placeholder="Введите город"
          />
          {errors.city && (
            <span style={{ color: "red" }}>{errors.city.message}</span>
          )}
        </div>
        <div>
          <label>Телефон</label>
          <input
            {...register("phone")}
            type="text"
            placeholder="Введите телефон"
          />
          {errors.phone && (
            <span style={{ color: "red" }}>{errors.phone.message}</span>
          )}
        </div>
        <div>
          <label>Название компании</label>
          <input
            {...register("company")}
            type="text"
            placeholder="Введите название компании"
          />
          {errors.company && (
            <span style={{ color: "red" }}>{errors.company.message}</span>
          )}
        </div>
        <button type="submit" className={style.submitButton}>
          Сохранить
        </button>
      </div>
    </form>
  );
};
