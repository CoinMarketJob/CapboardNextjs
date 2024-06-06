import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET() {
    const stakeholders = await prisma.shareClasses.findMany();

    return NextResponse.json(stakeholders);
}
