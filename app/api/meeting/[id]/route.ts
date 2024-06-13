import { getCurrentUser } from '@/app/actions/getCurrentUser';
import prisma from '@/libs/prismadb'
import { NextResponse } from "next/server";

export async function DELETE(
    request: Request, { params }: { params: { id: string } }
) {
    const meetingId = parseInt(params.id,10);
    const classes = await prisma.meeting.delete({
        where: {
            id: meetingId
        }
    })

    const currentUser = await getCurrentUser();

    const log = await prisma.logRecord.create({
        data: {
            userId: currentUser?.id,
            type: "Delete",
            page: "Meetings"
        }
    });
    return NextResponse.json(classes)
}