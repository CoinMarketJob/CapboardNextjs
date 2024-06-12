import { getCurrentUser } from "@/app/actions/getCurrentUser";
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

      const currentUser = await getCurrentUser();

      const log = await prisma.logRecord.create({
        data: {
          userId: currentUser?.id,
          type: "View",
          page: "Pools"
        }
      });

  return NextResponse.json(transactions);
}
