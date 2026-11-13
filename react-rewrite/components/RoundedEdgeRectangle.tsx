export function RoundedEdgeRectangle(props: {
  title: string;
  content: string;
}) {
  return (
    <section className="border-hovered-border rounded-2xl border-1 border-solid px-5 py-10 text-center sm:py-15">
      <h3 className="text-sm font-semibold text-white">{props.title}</h3>
      <p className="text-muted w-xs text-sm">{props.content}</p>
    </section>
  );
}
