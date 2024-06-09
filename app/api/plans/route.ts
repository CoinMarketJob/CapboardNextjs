import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const {
    planName,
    poolId,
    date,
    grantType,
    Note,
  } = body;

  const plans = await prisma.plan.create({
    data: {
      planName: planName,
      poolId: poolId,
      date: date,
      grantType: grantType,
      note: Note,
    },
  });

  const transaction = await prisma.transaction.create({
    data: {
      date: date,
      type: "PlanCreation",
      planId: plans.id,
      poolId: poolId,      
    },
  });


  return NextResponse.json(transaction);
}
