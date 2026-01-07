import Flashcards from "./components/Flashcards";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="mb-8 text-3xl font-bold">Flashcards</h1>
      <Flashcards />
    </div>
  );
}
