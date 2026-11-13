export function BigH2(props: { children: React.ReactNode }) {
  return (
    <h2 className="shadow-muted ring-hovered-border ring-0.5 my-10 text-center text-3xl font-extrabold shadow-2xl/20 sm:my-15 sm:w-xl sm:text-6xl">
      {props.children}
    </h2>
  );
}
