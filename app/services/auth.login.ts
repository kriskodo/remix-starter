import { User } from "./auth.server";

// example fn
export const login = async (email: string, password: string): Promise<User> => {
  if (password !== "root") throw new Error("Forbidden Exception");
  const user = { id: "1", email, roles: ["admin"] } as User;
  return new Promise((resolve) => resolve(user));
};
