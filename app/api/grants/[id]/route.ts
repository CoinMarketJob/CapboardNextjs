import prisma from '@/libs/prismadb'
import { NextResponse } from "next/server";

export async function DELETE(
   request: Request, {params} : {params: {id : string}}
) {
    const id = parseInt(params.id, 10);

    const classes = await prisma.transaction.delete({
        where: {
            id: id
        }
    })
    return NextResponse.json(classes)
}