import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-10 justify-center items-center">
        <h1 className="text-4xl mt-10">Christmas Three Decorator</h1>
        <button className="btn btn-dash btn-primary btn-xl w-50 btn-circle">
          <Link href="/editor">DECORATE</Link>
        </button>
      </div>
    </>
  );
}
