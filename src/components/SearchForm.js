"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function SearchForm() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/items?search=${encodeURIComponent(search)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar productos..."
        className="border p-2 mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Buscar
      </button>
    </form>
  );
}

export default SearchForm;
