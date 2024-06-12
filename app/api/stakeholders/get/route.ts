import { getCurrentUser } from "@/app/actions/getCurrentUser";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET() {
    const stakeholders = await prisma.stakeholders.findMany();
    const currentUser = await getCurrentUser();

    const log = await prisma.logRecord.create({
      data: {
        userId: currentUser?.id,
        type: "View",
        page: "Stakeholders"
      }
    });
    return NextResponse.json(stakeholders);
}
