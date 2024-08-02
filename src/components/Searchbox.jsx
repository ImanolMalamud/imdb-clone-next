"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Searchbox() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-between px-3 max-w-6xl mx-auto"
    >
      <input
        type="text"
        placeholder="Search keywords..."
        className="w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="text-amber-600 disabled:text-gray-400"
        disabled={search === ""}
      >
        Search
      </button>
    </form>
  );
}
