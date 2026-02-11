"use client"
import { useState } from "react";

const cards = [
  { question: "conjectures", answer: "предположения" },
  { question: "excitement", answer: "возбуждение" },
  { question: "easel", answer: "мольберт" },
  { question: "upright", answer: "вертикальный" },
  { question: "clamped", answer: "зажатый" },
  { question: "horns", answer: "рога" },
  { question: "insistence", answer: "настойчивость" },
  { question: "unmown", answer: "нескошенная" },
  { question: "sullen", answer: "угрюмый" },
  { question: "distant", answer: "далёкий" },
  { question: "roar", answer: "рев" },
  { question: "dim", answer: "тусклый" },
  { question: "swiftness", answer: "быстрота" },
  { question: "convey", answer: "передавать" },
  { question: "pale", answer: "бледный" },
  { question: "flitted", answer: "мелькнул" },
  { question: "tremulous", answer: "дрожащий" },
  { question: "blossoms", answer: "цветы" },
  { question: "innumerable", answer: "бесчисленные" },
  { question: "amidst", answer: "среди" },
  { question: "thorn", answer: "шип" },
  { question: "stirred", answer: "перемешано" },
  { question: "odour", answer: "запах" },
  { question: "conceal", answer: "скрыть" },
  { question: "reveal", answer: "раскрывать" },
  { question: "tonics", answer: "тонизирующие средства" },
  { question: "erase", answer: "стереть" },
  { question: "acquires", answer: "приобретает" },
  { question: "deforestation", answer: "вырубка лесов" },
  { question: "eliminating", answer: "устранение" },
  { question: "timber", answer: "древесина" },
  { question: "refine", answer: "уточнение" },
  { question: "impartial", answer: "беспристрастный" },
  { question: "derive", answer: "вывести" },
  { question: "get rid of", answer: "избавляться от" },
  { question: "obstacle", answer: "препятствие" },
  { question: "glimpse", answer: "случайно заметить" },
  { question: "care for and nurture", answer: "заботиться и воспитывать" },
  { question: "care for and maintain", answer: "уход и поддержание" },
  { question: "determining", answer: "определение" },
  { question: "retrieve", answer: "забрать" },
  { question: "rugged", answer: "прочный" },
  { question: "resemblance", answer: "сходство" },
  { question: "exhibit", answer: "выставка" },
  { question: "fellow", answer: "парень" },
  { question: "tossing", answer: "подбрасывание" },
  { question: "dreadful", answer: "ужасный" },
  { question: "languidly", answer: "вяло" },
  { question: "sought", answer: "искал" },
  { question: "lids", answer: "крышки" },
  { question: "upon", answer: "на" },
  { question: "linger", answer: "задерживаться" },
  { question: "comely", answer: "привлекательный" },
  { question: "gracious", answer: "любезный" },
  { question: "wildcard", answer: "подстановочный знак" },
  { question: "burying", answer: "захоронение" },
{ question: "masterpieces", answer: "шедевры" },
{ question: "beg", answer: "просить" },
{ question: "dreadfully", answer: "ужасно" },
{ question: "oblige", answer: "обязывать" },
{ question: "Executive", answer: "Исполнительный" },
{ question: "reckless", answer: "безрассудный" },
{ question: "pale", answer: "бледный" },
{ question: "perplexity", answer: "недоумение" },
{ question: "exhibit", answer: "выставка" },
{ question: "ecompasses", answer: "компасы" },
{ question: "interpret", answer: "интерпретировать" },
{ question: "sufficient", answer: "достаточный" },
{ question: "upswing", answer: "подъем" },
{ question: "humble", answer: "скромный" },
{ question: "reinforced", answer: "усиленный" },
{ question: "performance", answer: "производительность" },
{ question: "encouraged", answer: "поощряется" },
{ question: "merely", answer: "просто" },
{ question: "occasionally", answer: "изредка" },
{ question: "deception", answer: "обман" },
{ question: "spared", answer: "пощадил" },
{ question: "gape", answer: "зиять" },
{ question: "distinction", answer: "различие" },
{ question: "shrug", answer: "пожимает плечами" },
{ question: "exaggeration", answer: "преувеличение" },
{ question: "ivory", answer: "слоновая кость" },
{ question: "vain", answer: "тщетный" }
];

export default function Flashcards() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const nextCard = () => {
    setFlipped(false);
    setIndex((i) => (i + 1) % cards.length);
  };

  const prevCard = () => {
    setFlipped(false);
    setIndex((i) => (i - 1 + cards.length) % cards.length);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Card */}
      <div
        onClick={() => setFlipped(!flipped)}
        className="w-80 h-52 cursor-pointer [perspective:1000px]"
      >
        <div
          className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
            flipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          {/* Front */}
          <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-white p-6 text-xl text-black font-medium shadow-xl [backface-visibility:hidden]">
            {cards[index].question}
          </div>

          {/* Back */}
          <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-gray-100 p-6 text-lg text-black shadow-xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
            {cards[index].answer}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-4">
        <button
          onClick={prevCard}
          className="rounded-lg bg-gray-900 px-4 py-2 text-white hover:bg-gray-800"
        >
          Prev
        </button>
        <button
          onClick={nextCard}
          className="rounded-lg bg-gray-900 px-4 py-2 text-white hover:bg-gray-800"
        >
          Next
        </button>
      </div>
    </div>
  );
}
