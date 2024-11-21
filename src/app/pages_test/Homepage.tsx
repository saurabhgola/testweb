"use client";
import Link from "next/link";

function Aboutpage() {

  const hanletext = () => {
    alert("Hello, I am a developer");
  };
  return (
    <>
      <div>
        <h1 className="text-3xl text-center text-black mt-[8px]">
          Aboutpage test welcome test
        </h1>
      </div>
      <Link href="">Contect</Link>
      <button onClick={() => hanletext()}>Button</button>
    </>
  );
}
export default Aboutpage;
