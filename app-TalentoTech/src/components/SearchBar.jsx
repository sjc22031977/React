import "../styles/searchbar.css";

export default function SearchBar({
  search,
  setSearch,
}) {
  return (
    <input
      type="text"
      placeholder="Buscar producto..."
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
    />
  );
}