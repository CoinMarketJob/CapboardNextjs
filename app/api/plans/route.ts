import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const {
    planName,
    poolId,
    date,
    pricePerShare,
    startDate,
    duration,
    vestEvery,
    cliff,
    goodLeaver,
    badLeaver,
    liquidityEvent,
    Note,
  } = body; // Modal'dan gelen verileri al

  // const pricePer = parseFloat(pricePerShare);
  // const dur = parseInt(duration, 10);
  // const vest = parseInt(vestEvery, 10);
  // const clf = parseInt(cliff, 10);

  const plans = await prisma.plans.create({
    data: {
      planName: planName,
      poolId: parseInt(poolId, 10),
      date: date,
      pricePerShare: 1,
      duration: 1,
      vestEvery: 1,
      cliff: 1,
      goodLeaver: goodLeaver,
      badLeaver: badLeaver,
      liquidityEvent: liquidityEvent,
      Note: Note,
      purchasePrice: 21,
      vestingType: "Time",
    },
  });

  await console.log(plans);

  return NextResponse.json(plans);
}
