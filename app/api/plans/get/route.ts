import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET() {
    const transactions = await prisma.plan.findMany({
        include: {transactions : true, pool: true}
      });

    return NextResponse.json(transactions);
}
