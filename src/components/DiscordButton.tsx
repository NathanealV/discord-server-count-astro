import { DiscordButton } from "@astro-auth/ui";

type Props = { origin: string };

export default function Button({ origin }: Props) {
  return <DiscordButton callbackURL={origin} />;
}
