import { DiscordButton } from "@astro-auth/ui";

type Props = {
  pathName: string;
};

export default function Button({ pathName }: Props) {
  return <DiscordButton callbackURL={pathName} />;
}
