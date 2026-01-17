"use client";

import { Suspense } from "react";
import PortfolioGrid from "@/components/Portfolio/PortfolioGrid";

export default function PortfolioPage() {
  return (
    <div className="pt-24 pb-20">
      <Suspense fallback={<div>Loading...</div>}>
        <PortfolioGrid />
      </Suspense>
    </div>
  );
}
