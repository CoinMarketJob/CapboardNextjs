import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const {
    name,
    grantsAmount,
    date,
    shareClassId,
    documentId,
    note,
  } = body; // Modal'dan gelen verileri al

  const classId = parseInt(shareClassId, 10);
  const amountGrant = parseInt(grantsAmount, 10);
  const pool = await prisma.pool.create({
    data: {
      name: name,
      date: date,
      shareClassId: classId,
      documentId: documentId,
      Note: note,
    },
  });

  const amount = await prisma.poolAmount.create({
    data: {
      grantsAmount: amountGrant,
      date: date,
      poolId: pool.id,
    },
  });

  return NextResponse.json(pool);
}
