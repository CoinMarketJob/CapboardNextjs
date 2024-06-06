import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const {
    id,
    grantsAmount,
    amountUnit,
    date
  } = body;

  const amount = await prisma.poolAmount.create({
    data: {
      grantsAmount: grantsAmount,
      amountUnit: amountUnit,
      date: date,
      poolId: id,
    },
  });

  return NextResponse.json(amount);
}
