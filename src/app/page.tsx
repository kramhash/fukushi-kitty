import { Header, JotaiProvider, Marquee } from "@/components/commons";

import { Top, Interview, Info, MessageForm } from "@/components/top";
import { Footer } from "@/components/commons";

import { getInterviewList } from "@/lib/newt";

export default async function Home() {
  const items = await getInterviewList();
  // const galleries = await getGallery();

  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
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
