import { notFound } from "next/navigation";
import { getInterview, getInterviewList } from "@/lib/newt";
import { Interview } from "@/components/interview";

import "./interview.css";
import { Footer, Header, JotaiProvider } from "@/components/commons";
import { prefix } from "@/utils";

export default async function Page({ params }: { params: { id: string } }) {
  const list = await getInterviewList();
  let nextId = -1;
  for (let i = 0; i < list.length; i++) {
    if (list[i].id.toString() === params.id) {
      if (i === list.length - 1) {
        nextId = 1;
        break;
      } else {
        nextId = list[i + 1].id;
      }
    }
  }

  if (nextId === -1) {
    return notFound();
  }

  const item = await getInterview(params.id);
  if (item === null) {
    return notFound();
  }

  const nextItem = await getInterview(nextId.toString());

  if (nextItem === null) {
    return notFound();
  }

  item.body = item.body.map((paragraph, index) => {
    // console.log(paragraph);
    return {
      title: paragraph.title,
      content: paragraph.content.replace(
        /(.*)?<img src="(.*.jpg)?" [^<]*>?(.*)/,
        `$1<img src="${prefix(
          `assets/interview/${item.id}/img-${index + 1}.webp`
        )}" />$3`
      ),
    };
  });

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
