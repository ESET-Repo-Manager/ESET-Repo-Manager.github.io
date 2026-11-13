import Link from "next/link";

export function RoundedLink(props: {
  src: string;
  content: string;
  isDark: boolean;
  showArrow: boolean;
}) {
  if (props.showArrow) {
    return (
      <Link
        href={props.src}
        className="border-hovered-border hover:border-hovered-border m-5 flex flex-row rounded-full bg-white px-4 py-3 tracking-wider text-black transition-all hover:scale-105 hover:gap-3 hover:shadow-lg hover:shadow-white/15 hover:backdrop-brightness-200 sm:m-10 sm:px-6"
      >
        <span>{props.content}</span>
        <span className="">→</span>
      </Link>
    );
  }
  return (
    <Link
      href={props.src}
      className={
        props.isDark
          ? "text-hovered-txt hover:bg-active-surface border-hovered-border hover:border-hovered-border my-5 rounded-full border-2 border-solid px-4 py-3 tracking-wider transition-all hover:scale-105 sm:my-10 sm:px-6"
          : "border-hovered-border hover:border-hovered-border my-5 rounded-full bg-white px-4 py-3 tracking-wider text-black transition-all hover:scale-105 hover:shadow-lg hover:shadow-white/15 hover:backdrop-brightness-200 sm:my-10 sm:px-6"
      }
    >
      {props.content}
    </Link>
  );
}
