import { notFound } from "next/navigation";
import { getInterview, getInterviewList } from "@/lib/newt";
import { Interview } from "@/components/interview";

import "./interview.css";

export default async function Page({ params }: { params: { id: string } }) {
  const item = await getInterview(params.id);
  if (item === null) {
    return notFound();
  }
  return (
    <main>
      <Interview data={item} />
    </main>
  );
}

export async function generateStaticParams() {
  const items = await getInterviewList();
  return items.map((item) => ({ id: `${item.id}` }));
}
