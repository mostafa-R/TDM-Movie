import Search from "../Movie/Search";

function Home() {
  return (
    <div className="flex flex-col justify-center items-center mt-20 gap-15">
      <div className="text-center ">
        <h3 className="text-2xl text-slate-400">Home </h3>
      </div>
      <div className="w-full">
        <Search />
      </div>
    </div>
  );
}

export default Home;
