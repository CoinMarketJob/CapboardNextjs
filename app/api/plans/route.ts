import { getCurrentUser } from "@/app/actions/getCurrentUser";
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
      poolId: parseInt(poolId,10),
      date: new Date(date),
      grantType: grantType,
      note: Note,
    },
  });

  const transaction = await prisma.transaction.create({
    data: {
      date: new Date(date),
      type: "PlanCreation",
      planId: plans.id,
      poolId: parseInt(poolId, 10),      
    },
  });

  const currentUser = await getCurrentUser();

  const log = await prisma.logRecord.create({
    data: {
      userId: currentUser?.id,
      type: "Create",
      page: "Plans"
    }
  });

  return NextResponse.json(transaction);
}
