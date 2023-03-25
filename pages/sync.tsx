import * as React from "react";
import { useSyncExternalStore } from "react";

function onWindowSizeChange(onChange: () => void) {
  window.addEventListener("resize", onChange);
  return () => window.removeEventListener("resize", onChange);
}

function windowWidthSnapshot(selector = (w: number) => w) {
  return selector(window.innerWidth);
}

function windowHeightSnapshot(selector = (h: number) => h) {
  return selector(window.innerHeight);
}

type UseWindowSize = {
  widthSelector?: (w: number) => number;
  heightSelector?: (h: number) => number;
};

function useWindowSize({ widthSelector, heightSelector }: UseWindowSize) {
  const windowWidth = useSyncExternalStore(onWindowSizeChange, () =>
    windowWidthSnapshot(widthSelector),
  );

  const windowHeight = useSyncExternalStore(onWindowSizeChange, () =>
    windowHeightSnapshot(heightSelector),
  );

  return { width: windowWidth, height: windowHeight };
}

export default function App() {
  const [widthStep, setWidthStep] = React.useState(1);
  const [heightStep, setHeightStep] = React.useState(1);

  const windowSize = useWindowSize({
    widthSelector: (w) => (w ? Math.floor(w / widthStep) * widthStep : 1),
    heightSelector: (h) => (h ? Math.floor(h / heightStep) * heightStep : 1),
  });

  return (
    <div className="App">
      <h1>useWindowSize hook using useSyncExternalStore</h1>
      <h2>Resize the window</h2>
      <fieldset>
        <label htmlFor="width-step">Width step</label>

        <input
          type="range"
          id="width-step"
          name="width-step"
          min={0}
          max={100}
          step={20}
          value={widthStep}
          onChange={(e) => setWidthStep(e.target.valueAsNumber || 1)}
        />

        <output>{widthStep}</output>
      </fieldset>

      <fieldset>
        <label htmlFor="height-step">Height step</label>

        <input
          type="range"
          id="height-step"
          name="height-step"
          min={0}
          max={100}
          step={20}
          value={heightStep}
          onChange={(e) => setHeightStep(e.target.valueAsNumber || 1)}
        />
        <output>{heightStep}</output>
      </fieldset>

      <div style={{ width: "fit-content", margin: "10px auto" }}>
        <h2>Window size</h2>
        <table>
          <tbody>
            <tr>
              <th>Width</th>
              <td>{windowSize.width}</td>
            </tr>
            <tr>
              <th>Height</th>
              <td>{windowSize.height}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

// dark:bg-gradient-to-r dark:from-orange-500 dark:via-yellow-400 dark:to-red-700"
