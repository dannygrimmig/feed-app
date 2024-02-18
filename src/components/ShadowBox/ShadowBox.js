import * as React from "react";

export function ShadowBox(props) {
  const { children, outerClassName, innerClassName } = props;

  return (
    <div
      className={`border border-slate-800 rounded-lg bg-white dark:bg-brand-75 -translate-x-1 translate-y-2 ${outerClassName}`}
    >
      <div
        className={`border border-slate-800 rounded-lg dark:bg-sky-800 translate-x-1 -translate-y-1 h-full w-full ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  );
}
