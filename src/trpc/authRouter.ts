import { authCredentialsValidator } from "@/lib/validators/auth-credential-validator";
import { publicProcedure, router } from "./trpc";
import { getPayloadClient } from "@/get-payload";
import { TRPCError } from "@trpc/server";

export const authRouter = router({
  createPayloadUser: publicProcedure
    .input(authCredentialsValidator)
    .mutation(async ({ ctx, input }) => {
      const { email, password } = input;
      const payload = await getPayloadClient();

      const { docs: users } = await payload.find({
        collection: "users",
        where: {
          email: {
            equals: email,
          },
        },
      });

      if (users.length !== 0) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "User already exists",
        });
      }

      const user = await payload.create({
        collection: "users",
        data: {
          email,
          password,
        },
      });
    }),
});
