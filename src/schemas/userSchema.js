import { z } from "zod";

const userSchema = z
  .object({
    name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres"),

    email: z.email("Email inválido"),
  })
  .strict();

const userPatchSchema = userSchema
  .partial()
  .refine((data) => Object.keys(data).length > 0, {
    message: "Informe pelo menos um campo para atualizar",
  });

const idSchema = z.object({
  id: z.coerce.number().int().positive(),
});

export { userSchema, userPatchSchema, idSchema };
