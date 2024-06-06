import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET() {
    const stakeholders = await prisma.plans.findMany();

    return NextResponse.json(stakeholders);
}
