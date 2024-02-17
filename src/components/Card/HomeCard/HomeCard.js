import * as React from "react";
import { ShadowBox } from "../../ShadowBox/ShadowBox";

export function HomeCard({ children }) {
  return (
    <ShadowBox
      outerClassName="hover:bg-slate-800 "
      innerClassName="px-2 py-4 bg-stone-100 hover:translate-x-2 hover:-translate-y-2 transition"
    >
      {children}
    </ShadowBox>
  );
}
