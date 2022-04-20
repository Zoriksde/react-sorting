import { AbstractGenerator } from "../generators";
import { useSorting } from "../hooks/useSorting";
import { useVisualizer } from "../hooks/useVisualizer";
import { AbstractStrategy } from "../strategies";
import ArrayBar from "./ArrayBar";
import "./Visualizer.css";

export const ARRAY_SIZE = 100;
export const MIN_VALUE = 50;
export const MAX_VALUE = 450;

interface VisualizerProps {
  strategy: AbstractStrategy;
  generator: AbstractGenerator;
}

const Visualizer = ({ strategy, generator }: VisualizerProps) => {
  const [array] = useSorting({
    size: ARRAY_SIZE,
    min: MIN_VALUE,
    max: MAX_VALUE,
  });
  const {
    arrayBars,
    isVisualizing,
    isGenerating,
    isLoading,
    runSorting,
    runGenerating,
    clearSorting,
  } = useVisualizer({
    array: array,
  });

  const onVisualizerClickHandler = (): void => {
    if (isVisualizing || isGenerating) return;
    runSorting(strategy);
  };

  const onGeneratorClickHandler = (): void => {
    if (isVisualizing || isGenerating) return;
    runGenerating(generator);
  };

  const onClearClickHandler = (): void => {
    if (isLoading || isGenerating) return;
    clearSorting(generator);
  };

  return (
    <div className="visualizer">
      <div className="visualizer-menu">
        <div
          className="visualizer-item"
          style={{
            backgroundColor:
              isVisualizing || isGenerating ? "#c96567" : "#314455",
          }}
          onClick={onVisualizerClickHandler}
        >
          <span>Visualize {strategy.name}</span>
        </div>
        <div
          className="visualizer-item"
          style={{
            backgroundColor:
              isVisualizing || isGenerating ? "#c96567" : "#644e5b",
          }}
          onClick={onGeneratorClickHandler}
        >
          <span>Generate {generator.name}</span>
        </div>
        <div
          className="visualizer-item"
          style={{
            backgroundColor: isLoading || isGenerating ? "#c96567" : "#97aabd",
          }}
          onClick={onClearClickHandler}
        >
          <span>Clear</span>
        </div>
      </div>
      <div className="visualizer-bars">
        {arrayBars.map((bar, _bar) => {
          return (
            <ArrayBar key={_bar} value={bar.value} barType={bar.barType} />
          );
        })}
      </div>
    </div>
  );
};

export default Visualizer;
