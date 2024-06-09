import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET() {
    const transactions = await prisma.transaction.findMany({
        where: {
          planId: {
            not: null,
          },
        },
        include: {pool : true, plan : true}
      });

    return NextResponse.json(transactions);
}
