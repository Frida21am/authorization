export const loginUser = async (email: string, password: string) => {
  // Симуляция задержки ответа сервера
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // Симуляция успешного ответа или ошибки
  if (email === "test@example.com" && password === "Password123") {
    return { token: "mocked-token" }; // Успешный ответ с объектом
  } else {
    throw new Error("Неверный email или пароль"); // Ошибка входа
  }
};
