import React from "react";

export function RoundedH1(props: { children: React.ReactNode }) {
  return (
    <h1 className="bg-smooth-surface border-hovered-border text-muted rounded-full border-1 border-solid px-5 py-1 text-center text-xs tracking-widest">
      {props.children}
    </h1>
  );
}
