import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET() {
    const transactions = await prisma.transaction.findMany({
        include: { pool: true, plan: true, stakeholder: true }
    });

    return NextResponse.json(transactions);
}
