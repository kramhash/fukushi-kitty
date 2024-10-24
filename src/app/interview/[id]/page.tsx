import { notFound } from "next/navigation";
import { getInterview, getInterviewList } from "@/lib/newt";
import { Interview } from "@/components/interview";

import "./interview.css";
import { Footer, Header, JotaiProvider } from "@/components/commons";

export default async function Page({ params }: { params: { id: string } }) {
  const item = await getInterview(params.id);
  if (item === null) {
    return notFound();
  }
  return (
    <main>
      <JotaiProvider>
        <Interview data={item} />
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
