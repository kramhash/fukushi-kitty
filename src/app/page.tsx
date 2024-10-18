import { Marquee } from "@/components/commons";

import { Top, Interview, Info, MessageForm, Gallery } from "@/components/top";

import { getInterviewList, getGallery } from "@/lib/newt";

export default async function Home() {
  const items = await getInterviewList();
  const galleries = await getGallery();

  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Top />
      <Marquee />
      <Interview interviews={items} />
      <Info />
      <MessageForm />
      <Gallery data={galleries} />
    </main>
  );
}
