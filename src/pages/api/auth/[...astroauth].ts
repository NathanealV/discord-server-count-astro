import AstroAuth from "@astro-auth/core";
import { DiscordProvider } from "@astro-auth/providers";

export const all = AstroAuth({
  authProviders: [
    DiscordProvider({
      clientId: import.meta.env.DISCORD_CLIENT_ID,
      clientSecret: import.meta.env.DISCORD_CLIENT_SECRET,
      scope: "identify email guilds",
    }),
  ],
  hooks: {
    jwt: async (user) => {
      return {
        accessToken: user.access_token,
        user: {
          ...user.user,
          originalUser: user.user.originalUser,
        },
      };
    },
    account: async (user) => {
      return {
        ...user,
      };
    },
  },
});
