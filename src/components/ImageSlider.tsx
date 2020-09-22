import React, { FunctionComponent, useState } from "react";

export const ImageSlider: FunctionComponent = () => {
  const [imageState] = useState<string[]>([
    "https://picsum.photos/id/237/200/300",
    "https://picsum.photos/seed/picsum/200/300",
    "https://picsum.photos/200/300?grayscale",
    "https://picsum.photos/200/300/?blur",
  ]);
  const [indexState, setIndexState] = useState<number>(0);

  function incrementIndex(): number {
    if (indexState === imageState.length - 1) {
      return 0;
    }
    return indexState + 1;
  }
  function decrementIndex(): number {
    if (indexState < 1) {
      return imageState.length - 1;
    }
    return indexState - 1;
  }
  console.log(indexState);
  return (
    <div>
      <button onClick={() => setIndexState(decrementIndex)}>Previous</button>
      <img
        alt=""
        src={imageState[indexState]}
        style={{
          width: 100,
          height: 100,
        }}
      />
      <button onClick={() => setIndexState(incrementIndex)}>Next</button>
      <div></div>
    </div>
  );
};
