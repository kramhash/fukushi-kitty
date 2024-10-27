import { notFound } from "next/navigation";
import { getInterview, getInterviewList } from "@/lib/newt";
import { Interview } from "@/components/interview";

import "./interview.css";
import { Footer, Header, JotaiProvider } from "@/components/commons";

export default async function Page({ params }: { params: { id: string } }) {
  const list = await getInterviewList();
  let nextId = parseInt(params.id) + 1;
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === params.id) {
      if (i === list.length - 1) {
        console.log("last item");
        nextId = 1;
        break;
      }
    }
  }

  console.log(nextId);

  const item = await getInterview(params.id);
  if (item === null) {
    return notFound();
  }

  const nextItem = await getInterview(nextId.toString());

  if (nextItem === null) {
    return notFound();
  }

  return (
    <main>
      <JotaiProvider>
        <Interview data={item} nextItem={nextItem} />
        <Header />
        <Footer />
      </JotaiProvider>
    </main>
  );
}

export async function generateStaticParams() {
  const items = await getInterviewList();
  return items.map((item) => ({ id: `${item.id}` }));
}
