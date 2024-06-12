import { getCurrentUser } from "@/app/actions/getCurrentUser";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET() {
    const transactions = await prisma.transaction.findMany({
        include: { pool: true, plan: true, stakeholder: true }
    });

    const currentUser = await getCurrentUser();

    const log = await prisma.logRecord.create({
      data: {
        userId: currentUser?.id,
        type: "View",
        page: "Transactions"
      }
    });

    return NextResponse.json(transactions);
}
