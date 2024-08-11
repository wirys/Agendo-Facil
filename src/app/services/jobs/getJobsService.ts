"use server";

import { db } from "@/lib/prisma";

interface ListJobsParams {
    limit?: number;
    name?: string

}

export const getJobsService = async (query?: string) => {
    return await db.jobs.findMany({
      where: {
        name: {
          contains: query,
        },
      },
    });
  };