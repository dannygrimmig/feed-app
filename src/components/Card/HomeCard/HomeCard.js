import * as React from "react";
import { ShadowBox } from "../../ShadowBox/ShadowBox";

export function HomeCard({ children }) {
  return (
    <ShadowBox
      outerClassName="hover:bg-slate-800 dark:hover:bg-brand-50"
      innerClassName="px-2 py-4 bg-brand-50 dark:bg-brand-50 hover:translate-x-2 hover:-translate-y-2 transition cursor-pointer"
    >
      {children}
    </ShadowBox>
  );
}
