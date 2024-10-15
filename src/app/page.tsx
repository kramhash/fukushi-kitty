import { Marquee } from "@/components/commons";

import { Top, Interview, Info, MessageForm } from "@/components/top";

import { getInterviewList } from "@/lib/newt";

export default async function Home() {
  const items = await getInterviewList();

  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Top />
      <Marquee />
      <Interview interviews={items} />
      <Info />
      <MessageForm />
    </main>
  );
}
