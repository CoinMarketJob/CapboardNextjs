import { getCurrentUser } from "@/app/actions/getCurrentUser";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const {
    stakeholderId,
    planId,
    amount,
    date,
    expiryDate,
    purchasePrice,
    vestingType,
    startDate,
    duration,
    vestEvery,
    cliff,
    goodLeaver,
    badLeaver,
    liquidityEvent,
    note
  } = body;

  const plan = await prisma.plan.findFirst({
    where: {
      id: parseInt(planId, 10),
    },
    include: {
      pool: true,
    },
  });

  const transaction = await prisma.transaction.create({
    data: {
      type: "Grant", 
      stakeholderId: parseInt(stakeholderId, 10),
      planId: parseInt(planId, 10),
      poolId: plan?.pool.id,
      amount: parseInt(amount, 10),
      date: new Date(date),
      expiryDate: new Date(expiryDate),
      purchasePrice: parseInt(purchasePrice, 10),
      vestingType: vestingType,
      startDate: startDate != "" ? new Date(startDate) : null,
      duration: parseInt(duration, 10),
      vestEveryDate: parseInt(vestEvery, 10),
      cliff: parseInt(cliff, 10),
      goodLeaver: goodLeaver,
      badLeaver: badLeaver,
      liquidityEvent: liquidityEvent,
      note: note,    
    },
  });
  
  const currentUser = await getCurrentUser();

  const log = await prisma.logRecord.create({
    data: {
      userId: currentUser?.id,
      type: "Create",
      page: "Grants"
    }
  });


  return NextResponse.json(transaction);
}
