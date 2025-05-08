import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="p-8 sm:p-20 min-h-screen grid place-items-center font-[family-name:var(--font-geist-sans)]">
        <p>Hello World</p>
      </main>
    </>
  );
}
