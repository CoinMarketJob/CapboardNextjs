import { getCurrentUser } from '@/app/actions/getCurrentUser';
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

    const currentUser = await getCurrentUser();

    const log = await prisma.logRecord.create({
      data: {
        userId: currentUser?.id,
        type: "Delete",
        page: "ShareClasses"
      }
    });
    
    return NextResponse.json(classes)
}