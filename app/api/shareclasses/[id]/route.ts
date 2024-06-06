import prisma from '@/libs/prismadb'
import { NextResponse } from "next/server";



export async function DELETE(
   request: Request, {params} : {params: {id : string}}
) {
    const classId = parseInt(params.id, 10);

    const classes = await prisma.shareClasses.delete({
        where: {
            id: classId
        }
    })
    return NextResponse.json(classes)
}