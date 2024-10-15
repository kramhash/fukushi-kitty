import "server-only";
import type { IArticle, IArticleShort } from "@/types/newt";
import { createClient } from "newt-client-js";
import { cache } from "react";

const client = createClient({
  spaceUid: process.env.NEWT_SPACE as string,
  token: process.env.NEWT_APIKEY as string,
  apiType: "cdn",
});

export const getInterviewList = cache(async () => {
  const { items } = await client.getContents<IArticleShort>({
    appUid: "interview",
    modelUid: "article",
    query: {
      select: ["title", "id", "_id"],
    },
  });

  return items;
});

export const getInterview = cache(async (id: string) => {
  const item = await client.getFirstContent<IArticle>({
    appUid: "interview",
    modelUid: "article",
    query: {
      id,
    },
  });

  return item;
});
