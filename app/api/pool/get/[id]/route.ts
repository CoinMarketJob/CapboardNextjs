import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const poolId = parseInt(params.id, 10);

  const transactions = await prisma.transaction.findMany({
    where: {
      poolId: poolId
    },
    include: {pool : true,}
  });

  return NextResponse.json(transactions);
}
