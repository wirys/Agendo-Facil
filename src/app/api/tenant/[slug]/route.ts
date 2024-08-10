import { db } from '@/lib/prisma';
import { type NextRequest } from 'next/server'
export async function GET(request: NextRequest,
    { params }: { params: { slug: string } }
) {
    const slug = params.slug // 'a', 'b', or 'c'

    const tenant = await db.tenant.findFirst({
        where: {
            slug: slug
        }
    });

    return Response.json(tenant)

}