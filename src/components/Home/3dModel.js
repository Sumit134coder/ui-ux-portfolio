"use client";

import React , { Suspense } from "react";
const Spline = React.lazy(() => import('@splinetool/react-spline'));

const Model = () => {
  return (
    <div className="h-[100vh]">
      <Suspense
        fallback={<div className="text-lg text-white font-bold bg-red-500">Loading...</div>}
      >
        <Spline scene="https://prod.spline.design/TvQaIQ4VEymK3xxv/scene.splinecode" />
      </Suspense>
    </div>
  );
};

export default Model;
