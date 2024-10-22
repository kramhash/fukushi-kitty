"use client";

import { prefix } from "@/utils";
import { Image, Layer, Stage, Text } from "react-konva";
import type Konva from "konva";

import { motion } from "framer-motion";
import useImage from "use-image";
import { useResizeObserver } from "usehooks-ts";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./konva.css";
import { useAtom, useAtomValue, useSetAtom } from "jotai";

import {
  uploadImageAtom,
  modeAtom,
  generatedImageAtom,
  formDataAtom,
} from "@/components/states";

import { atomWithReset } from "jotai/utils";

const imageLoadedAtom = atomWithReset(false);

const Composite = () => {
  const stageRef = useRef<Konva.Stage>(null);
  const ref = useRef<HTMLDivElement>(null);
  const { width = 1024 } = useResizeObserver({ ref });
  const [mode, setMode] = useAtom(modeAtom);
  const setImage = useSetAtom(generatedImageAtom);
  const [data, setData] = useAtom(formDataAtom);
  const uploadImage = useAtomValue(uploadImageAtom);
  const imageLoaded = useAtomValue(imageLoadedAtom);

  // const { scale } = useMemo(() => {
  //   //   // console.log(width, 1600);
  //   return { scale: Math.min(1, width / 1600) };
  // }, [width]);

  // useLayoutEffect(() => {
  //   if (stageRef.current) {
  //     const stage = stageRef.current;
  //     // console.log(stage);
  //     setTimeout(() => {
  //       const data = stage.toDataURL();
  //       console.log("create image");
  //       setImage(data);
  //     }, 1500);
  //   }
  // }, [setImage]);

  const generate = useCallback(async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setMode("composite");
  }, []);

  useEffect(() => {
    if (mode === "composite") {
      console.log("composite");
      if (stageRef.current) {
        const stage = stageRef.current;
        const data = stage.toDataURL({ mimeType: "image/png" });
        setImage(data);
      }
    } else if (mode === "processing") {
      if (!uploadImage) {
        generate();
      } else if (imageLoaded) {
        generate();
      }
    }
  }, [mode, uploadImage, imageLoaded]);

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
          <TriggerText text={data.trigger} />
          <JobText job={data.job} name={data.name} />
          {/* <NameText text={data.job} /> */}
        </Layer>
      </Stage>
    </motion.section>
  );
};

const UserImage = memo(function UserImage() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const urltext = useAtomValue(uploadImageAtom);
  const setImageLoaded = useSetAtom(imageLoadedAtom);

  const { img } = useMemo(() => {
    if (!urltext) return { img: null };

    const img = document.createElement("img");
    img.src = urltext;
    img.onload = () => {
      // console.log("width", img.width);
      setImageLoaded(true);
      setSize({ width: img.width, height: img.height });
    };
    return { img };
  }, [urltext]);

  const matrix = useMemo(() => {
    const scaleX =
      size.width > 1600 ? 1600 / size.width : Math.max(1, 1600 / size.width);
    const scaleY =
      size.height > 1000 ? 1000 / size.height : Math.max(1, 1000 / size.height);
    const scale = Math.max(scaleX, scaleY);

    // console.log(scaleX, scaleY, size);
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

const JobText = memo(function JobText({
  job,
  name,
}: {
  job: string;
  name: string;
}) {
  const urltext = useAtomValue(uploadImageAtom);

  const { text } = useMemo(() => {
    return {
      text: urltext == null ? `${job}\n${name}` : `${job} ${name}`,
    };
  }, [job, name, urltext]);

  return (
    <Text
      text={text}
      x={600}
      y={urltext ? 1220 : 1000}
      fontSize={49}
      width={400}
      fill="#000000"
      fontFamily="M PLUS Rounded 1c"
      fontStyle="800"
      align="center"
      lineHeight={1.5}
    />
  );
});

const TriggerText = ({ text }: { text: string }) => {
  const urltext = useAtomValue(uploadImageAtom);

  return (
    <Text
      text={text}
      x={800}
      y={urltext ? 1115 : 630}
      width={urltext ? 1600 : 1200}
      fontSize={urltext ? 66 : 76}
      fill="#000000"
      fontFamily="M PLUS Rounded 1c"
      fontStyle="800"
      align="center"
      lineHeight={1.5}
      offsetX={urltext ? 800 : 600}
      // fontStyle="black"
    />
  );
};

const ImageFrame = ({}: { width: number | undefined }) => {
  const urltext = useAtomValue(uploadImageAtom);
  const [img] = useImage(
    prefix(
      `assets/top/messageform/${urltext ? "img_frame" : "img_txt_frame"}.png`
    )
  );
  return <Image image={img} alt="" x={0} y={0} width={1600} height={1600} />;
};

export default Composite;
