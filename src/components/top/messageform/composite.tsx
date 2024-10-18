"use client";

import { prefix } from "@/utils";
import { Image, Layer, Stage, Text } from "react-konva";
import type Konva from "konva";

import { motion } from "framer-motion";
import useImage from "use-image";
import { useResizeObserver } from "usehooks-ts";
import {
  memo,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "./konva.css";
import { useAtomValue, useSetAtom } from "jotai";
import { Label } from "@/components/commons";
import {
  genJobAtom,
  genNameAtom,
  genTriggerAtom,
  uploadImageAtom,
  generatedImageAtom,
} from "@/components/states";

import { formMode } from ".";

const Composite = ({ setMode }: { setMode: (mode: formMode) => void }) => {
  const stageRef = useRef<Konva.Stage>(null);
  const ref = useRef<HTMLDivElement>(null);
  const { width = 1024 } = useResizeObserver({ ref });
  const setImage = useSetAtom(generatedImageAtom);

  // const { scale } = useMemo(() => {
  //   //   // console.log(width, 1600);
  //   return { scale: Math.min(1, width / 1600) };
  // }, [width]);

  const onClick = useCallback(() => {
    // console.log(stageRef.current);
    setMode("form");
  }, [setMode]);

  useLayoutEffect(() => {
    if (stageRef.current) {
      const stage = stageRef.current;
      console.log(stage);
      setTimeout(() => {
        const data = stage.toDataURL();
        setImage(data);
      }, 1000);
    }
  }, [setImage]);

  return (
    <motion.section ref={ref} className="w-full md:px-[100px] hidden">
      <Stage
        width={1600}
        height={1600}
        ref={stageRef}

        // scaleX={scale}
        // scaleY={scale}
      >
        <Layer>
          <UserImage />
          <ImageFrame width={width} />
          <TriggerText />
          <JobText />
          <NameText />
        </Layer>
      </Stage>

      <motion.div>
        <motion.button onClick={onClick}>
          <Label>もう一回</Label>
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

const UserImage = memo(function UserImage() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const urltext = useAtomValue(uploadImageAtom);
  const { img } = useMemo(() => {
    if (!urltext) return { img: null };
    const img = document.createElement("img");
    img.src = urltext;
    img.onload = () => {
      console.log("width", img.width);
      setSize({ width: img.width, height: img.height });
    };
    return { img };
  }, [urltext]);
  const matrix = useMemo(() => {
    const scaleX = Math.max(1, 1600 / size.width);
    const scaleY = Math.max(1, 1000 / size.height);
    const scale = Math.max(scaleX, scaleY);
    const width = size.width * scale;
    const height = size.height * scale;

    const x = (1600 - width) * 0.5;
    const y = (1000 - height) * 0.5;

    // document.fonts.forEach((f) => {
    //   console.log(f.family);
    // });
    return {
      width,
      height,
      x,
      y,
    };
  }, [size]);

  if (!img || isNaN(matrix.x)) return <></>;

  return (
    <Image
      image={img}
      alt=""
      x={matrix.x}
      y={matrix.y}
      width={matrix.width}
      height={matrix.height}
    />
  );
});

const JobText = memo(function JobText() {
  const text = useAtomValue(genJobAtom);
  return (
    <Text
      text={text}
      x={650}
      y={1220}
      fontSize={48}
      width={300}
      fill="#000000"
      fontFamily="M PLUS Rounded 1c"
      fontStyle="800"
      align="center"
    />
  );
});

const NameText = memo(function NameText() {
  const text = useAtomValue(genNameAtom);
  return (
    <Text
      text={text}
      x={650}
      y={1280}
      fontSize={48}
      width={300}
      fill="#000000"
      fontFamily="M PLUS Rounded 1c"
      fontStyle="800"
      align="center"
    />
  );
});

const TriggerText = () => {
  const trigger = useAtomValue(genTriggerAtom);

  return (
    <Text
      text={trigger}
      x={0}
      y={1110}
      width={1600}
      fontSize={66}
      fill="#000000"
      fontFamily="M PLUS Rounded 1c"
      fontStyle="800"
      align="center"
      // fontStyle="black"
    />
  );
};

const ImageFrame = ({}: { width: number | undefined }) => {
  const [img] = useImage(prefix("assets/top/messageform/img_frame.png"));
  return <Image image={img} alt="" x={0} y={0} width={1600} height={1600} />;
};

export default Composite;
