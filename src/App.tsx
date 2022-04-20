import { useState } from "react";
import Header from "./components/Header";
import Visualizer from "./components/Visualizer";
import { AbstractGenerator, RandomBarsGenerator } from "./generators";
import { AbstractStrategy, BubbleSortStrategy } from "./strategies";

const App = () => {
  const [currentStrategy, setCurrentStrategy] = useState<AbstractStrategy>(
    new BubbleSortStrategy()
  );

  const [currentGenerator, setCurrentGenerator] = useState<AbstractGenerator>(
    new RandomBarsGenerator()
  );

  const onStrategyClickHandler = (strategy: AbstractStrategy): void => {
    setCurrentStrategy(strategy);
  };

  const onGeneratorClickHandler = (strategy: AbstractGenerator): void => {
    setCurrentGenerator(strategy);
  };

  return (
    <div className="app">
      <Header
        onStrategyClick={onStrategyClickHandler}
        onGeneratorClick={onGeneratorClickHandler}
        strategy={currentStrategy}
        generator={currentGenerator}
      />
      <Visualizer strategy={currentStrategy} generator={currentGenerator} />
    </div>
  );
};

export default App;
