import { z } from "zod";

const authCredentialsValidator = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
});

type TAuthCredentialsValidator = z.infer<typeof authCredentialsValidator>;

export { authCredentialsValidator, type TAuthCredentialsValidator };
