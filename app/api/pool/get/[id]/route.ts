import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const poolId = parseInt(params.id, 10);

  const pool = await prisma.pool.findUnique({
    where: { id: poolId },
  });

  return NextResponse.json(pool);
}
