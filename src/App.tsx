import { faker } from "@faker-js/faker";

import RestartButton from "./components/RestartButton";
import Results from "./components/Results";

const words = faker.random.words(10);

const App = () => {
  return (
    <>
      <Timer timeLeft={30} />
      <GeneratedWords words={words} />;
      <RestartButton
        className={"mx-auto mt-10 text-slate-500"}
        onRestart={() => null}
      />
      <Results
        className="mt-10"
        errors={10}
        accuracy={100}
        total={200}
      />
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
