import { faker } from "@faker-js/faker";

const words = faker.random.words(10);

const App = () => {
  return (
    <>
      <Timer timeLeft={30} />
      <GeneratedWords words={words} />;
    </>
  )
}

const GeneratedWords = ({ words }: { words: string}) => {
  return (
    <div className="text-4xl text-center text-slate-500">
      {words}
    </div>
  );
}

const Timer = ({ timeLeft }: { timeLeft: number }) => {
  return <h2 className="text-primary-400 font-medium">Time: {timeLeft}</h2>;
}

export default App;
