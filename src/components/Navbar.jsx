import React, { Suspense } from "react";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex bg-amber-100 dark:bg-gray-600 p-4 lg:text-lg justify-center gap-6">
      <Suspense fallback={<div>Loading...</div>}>
        <NavbarItem title="Trending" param="fetchTrending" />
        <NavbarItem title="Top Rated" param="fetchTopRated" />
      </Suspense>
    </div>
  );
}
