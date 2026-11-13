export function RoundedBlock(props: { children: React.ReactNode }) {
  return (
    <div className="border-hovered-border text-muted bg-softer-white shadow-active-surface m-10 rounded-2xl border-1 border-solid text-center shadow-xs">
      {props.children}
    </div>
  );
}
