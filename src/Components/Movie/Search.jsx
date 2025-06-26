import searchIcon from "./search.svg";

function Search({ search, searchTerm, setSearchTerm }) {
  return (
    <form className="max-w-sm mx-auto " action={search}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <img src={searchIcon} alt="Search Icon" width={20} height={20} />
        </div>
        <input
          value={searchTerm}
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-10"
          placeholder="Search Movies"
          required
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </form>
  );
}

export default Search;
