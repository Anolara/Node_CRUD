import { z } from "zod";

const userSchema = z
  .object({
    name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres"),

    email: z.email("Email inválido"),
  })
  .strict();

const userPatchSchema = userSchema.partial();

export { userSchema, userPatchSchema };
