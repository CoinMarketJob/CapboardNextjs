import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET() {
    const transactions = await prisma.pool.findMany({
        include: {transactions : true,}
      });

    return NextResponse.json(transactions);
}
