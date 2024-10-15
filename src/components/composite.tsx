"use client";

import { Image, Layer, Stage, Text } from "react-konva";
import useImage from "use-image";

const Composite = () => {
  return (
    <>
      <Stage width={800} height={600}>
        <Layer>
          <ImageFrame />
          <Text
            text="こんにちわ！ HELLO"
            x={100}
            y={50}
            fontSize={50}
            fill="#000000"
            fontFamily="M PLUS Rounded 1c"
            fontStyle="bold"
          />
        </Layer>
      </Stage>
      <div className=" font-mplus1c font-bold">こんにちわ HELLO</div>
    </>
  );
};

const ImageFrame = () => {
  const [img] = useImage("/assets/img_frame.png");
  return <Image image={img} alt="" x={0} y={0} />;
};

export default Composite;
