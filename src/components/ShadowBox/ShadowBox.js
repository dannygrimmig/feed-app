import * as React from "react";

export function ShadowBox(props) {
  const { children, outerClassName, innerClassName } = props;

  return (
    <div
      className={`border border-slate-800 dark:border-slate-200 rounded-lg bg-white dark:bg-sky-800 -translate-x-1 translate-y-2 ${outerClassName}`}
    >
      <div
        className={`border border-slate-800 dark:border-slate-200 rounded-lg dark:bg-sky-800 translate-x-1 -translate-y-1 h-full w-full ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  );
}
