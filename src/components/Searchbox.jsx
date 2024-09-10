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
      className="flex items-center justify-end max-w-6xl mx-auto px-3 pt-6"
    >
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search keywords..."
          className="h-10 w-48 rounded-md placeholder-gray-500 outline-none bg-transparent"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="text-amber-600 disabled:text-gray-400"
          disabled={search === ""}
        >
          Search
        </button>
      </div>
    </form>
  );
}
