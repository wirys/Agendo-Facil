"use server";

import { db } from "@/lib/prisma";

interface ListJobsParams {
    limit?: number;
    name?: string

}

export const getCategoriesService = async () => {

    return await db.categories.findMany({});
}

