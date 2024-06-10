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
    return NextResponse.json(pool)
}