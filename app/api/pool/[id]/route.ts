import { getCurrentUser } from '@/app/actions/getCurrentUser';
import prisma from '@/libs/prismadb'
import { NextResponse } from "next/server";

export async function DELETE(
    request: Request, { params }: { params: { id: string } }
) {

    const pool = await prisma.pool.delete({
        where: {
            id: parseInt(params.id, 10)
        }
    })

    const currentUser = await getCurrentUser();

    const log = await prisma.logRecord.create({
      data: {
        userId: currentUser?.id,
        type: "Delete",
        page: "Pools"
      }
    });
    return NextResponse.json(pool)
}