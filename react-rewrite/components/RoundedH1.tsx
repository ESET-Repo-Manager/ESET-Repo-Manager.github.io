import React from "react";

export function RoundedH1(props: { children: React.ReactNode }) {
  return (
    <h1 className="bg-smooth-surface rounded-full border-solid border-1 border-hovered-border text-center text-xs text-muted sm:text-sm tracking-widest py-1 px-5 sm:p-5">
      {props.children}
    </h1>
  );
}
