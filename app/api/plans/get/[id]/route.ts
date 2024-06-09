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

  return NextResponse.json(classes);
}
