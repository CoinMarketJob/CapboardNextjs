import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET() {
    const transactions = await prisma.transaction.findMany({
        where: { type: "Grant", },
        include: { stakeholder: true, plan: true }
    });

    return NextResponse.json(transactions);
}
