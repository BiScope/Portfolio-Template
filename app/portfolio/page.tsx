"use client";

import { Suspense } from "react";
import PortfolioGrid from "@/components/Portfolio/PortfolioGrid";

export default function PortfolioPage() {
  return (
      <Suspense fallback={<div>Loading...</div>}>
        <PortfolioGrid />
      </Suspense>
  );
}
