import { Header, JotaiProvider, Marquee } from "@/components/commons";

import { Top, Interview, Info, MessageForm } from "@/components/top";
import { Footer } from "@/components/commons";

import { getInterviewList } from "@/lib/newt";
import { prefix } from "@/utils";
import { preload } from "react-dom";

export default async function Home() {
  const items = await getInterviewList();
  // const galleries = await getGallery();
  preload(prefix("assets/top/messageform/img_frame.png"), { as: "image" });
  preload(prefix("assets/top/messageform/img_txt_frame.png"), { as: "image" });
  preload(prefix("assets/top/messageform/loading/l1.png"), { as: "image" });
  preload(prefix("assets/top/messageform/loading/l2.png"), { as: "image" });
  preload(prefix("assets/top/messageform/loading/l3.png"), { as: "image" });
  preload(prefix("assets/top/messageform/loading/l4.png"), { as: "image" });
  preload(prefix("assets/top/messageform/loading/l5.png"), { as: "image" });

  return (
    <main className="flex flex-col items-center sm:items-start">
      <JotaiProvider>
        <Top />
        <Marquee />
        <Interview interviews={items} />
        <Info />
        <MessageForm />
        {/* <Gallery data={galleries} /> */}
        <Header />
        <Footer />
      </JotaiProvider>
    </main>
  );
}
