import prisma from '@/libs/prismadb'
import { NextResponse } from "next/server";

export async function DELETE(
   request: Request, {params} : {params: {id : string}}
) {
    const plansId = parseInt(params.id, 10);

    const classes = await prisma.plan.delete({
        where: {
            id: plansId
        }
    })

    const currentUser = await getCurrentUser();

    const log = await prisma.logRecord.create({
      data: {
        userId: currentUser?.id,
        type: "Delete",
        page: "Plans"
      }
    });
    return NextResponse.json(classes)
}