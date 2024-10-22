import { useEffect, useRef } from "react";
import type { IForm } from "@/types";

const endPoint = process.env.NEXT_PUBLIC_NEWT_FORM_ENDPOINT;

const decode = (data: string) => {
  const decodeData = atob(data.replace(/^.*,/, ""));
  const buffers = new Uint8Array(decodeData.length);
  for (let i = 0; i < decodeData.length; i++) {
    buffers[i] = decodeData.charCodeAt(i);
  }
  try {
    const blob = new Blob([buffers.buffer], {
      type: "image/png",
    });
    return blob;
  } catch (_) {
    return null;
  }
};

const send = async (formData: FormData) => {
  console.log("endPoint", endPoint);
  // const res = await fetch(endPoint!, { method: "POST", body: formData });
  // console.log(res);
};

export const useSendForm = ({
  data,
  dataUrl,
}: {
  data: IForm;
  dataUrl: string | null;
}) => {
  const ref = useRef<boolean>();
  const blobRef = useRef<Blob | null>(null);

  useEffect(() => {
    if (ref.current === undefined) {
      console.log(data);

      ref.current = true;

      if (!dataUrl) return;

      blobRef.current = decode(dataUrl);

      if (blobRef.current) {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("job", data.job);
        formData.append("email", data.email);
        formData.append("file", blobRef.current, "generated.png");
        formData.append("googleReCaptchaToken", data.googleReCaptchaToken);
        send(formData);
      }
    }
  }, []);
  return blobRef;
};
