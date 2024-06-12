import { getCurrentUser } from "@/app/actions/getCurrentUser";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const plansId = parseInt(params.id, 10);

  const classes = await prisma.plan.findUnique({
    where: { id: plansId },
    include:  {pool: true, plan: true}
  });

  const currentUser = await getCurrentUser();

  const log = await prisma.logRecord.create({
    data: {
      userId: currentUser?.id,
      type: "View",
      page: "Plans"
    }
  });

  return NextResponse.json(classes);
}
