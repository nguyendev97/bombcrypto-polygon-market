import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const HomePageComponent = lazy(() => import("module/home"));
const UserPageComponent = lazy(() => import("module/user"));
export default function RoutesIndex() {
  return (
    <React.Fragment>
      <Suspense fallback={<p> Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePageComponent />} />
          <Route path="/user" element={<UserPageComponent />} />
        </Routes>
      </Suspense>
    </React.Fragment>
  );
}
