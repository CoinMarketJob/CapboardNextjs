import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { grantsAmount, date, Type, poolId, note } = body;

  const transaction = await prisma.transaction.create({
    data: {
      date: new Date(date),
      type: Type,
      poolId: poolId,
      amount: parseInt(grantsAmount, 10),
      note: note
    },
  });

  return NextResponse.json(transaction);
}
