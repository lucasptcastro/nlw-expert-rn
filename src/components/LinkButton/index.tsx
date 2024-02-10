import { Link, LinkProps } from "expo-router";

interface ILinkButton extends LinkProps<string> {
  title: string;
}

export function LinkButton({ title, ...rest }: ILinkButton) {
  return (
    <Link className="text-slate-300 text-center text-base font-bodu" {...rest}>
      {title}
    </Link>
  );
}
