"use server";

import { db } from "@/lib/prisma";
import { Jobs } from "@prisma/client";




export async function getJobsService(query: string = "", categoryIds: number[] = []): Promise<Jobs[]> {
  return await db.jobs.findMany({
    where: {
      name: {
        contains: query,
      },
      ...(categoryIds.length > 0 ? {
        categoriesId: {
          in: categoryIds,
        },
      } : {}),
    },
  });
}