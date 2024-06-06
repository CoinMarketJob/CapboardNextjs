import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const {
    planName,
    poolId,
    date,
    grantType,
    pricePerShare,
    purchasePrice,
    vestingType,
    startDate,
    duration,
    vestEvery,
    cliff,
    goodLeaver,
    badLeaver,
    liquidityEvent, 
    Note
  } = body; // Modal'dan gelen verileri al
  

  const plans = await prisma.plans.create({
    data: {
        planName: planName,
        poolId: poolId,
        date: date,
        grantType: grantType,
        pricePerShare: pricePerShare,
        purchasePrice: purchasePrice,
        vestingType: vestingType,
        startDate: startDate,
        duration: duration,
        vestEvery: vestEvery,
        cliff: cliff,
        goodLeaver: goodLeaver,
        badLeaver: badLeaver,
        liquidityEvent: liquidityEvent,  
        Note:  Note
    }
  });

  return NextResponse.json(plans);
}
