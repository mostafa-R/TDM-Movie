function Pagination({ nextPage, prevPage, page }) {
  return (
    <>
      <div className="flex justify-center items-center  my-8">
        {/* <!-- Previous Button --> */}
        <button
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={prevPage}
          disabled={page === 1}
        >
          Previous
        </button>

        {/* <!-- Next Button --> */}
        <button
          className="flex items-center justify-center px-3 h-8 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Pagination;
