"use client"

import Aboutpage from "./pages_test/Homepage";

function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="mt-[550px] border-none bg-zinc-950 py-[50px] px-[60px] text-center text-slate-100">
        Welcome To Next JS
      </h1>
      <Aboutpage />
    </div>
  );
}
export default Home;
