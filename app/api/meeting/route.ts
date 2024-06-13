import { getCurrentUser } from "@/app/actions/getCurrentUser";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = await request.json();
    const { name, type, date, timezone, location, link } = body;

    const meeting = await prisma.meeting.create({
        data: {
            name,
            type,
            date: new Date(date),
            timezone,
            location,
            link
        },
    });

    const currentUser = await getCurrentUser();

    const log = await prisma.logRecord.create({
        data: {
            userId: currentUser?.id,
            type: "Create",
            page: "Meetings"
        }
    });

    return NextResponse.json(meeting);
}
