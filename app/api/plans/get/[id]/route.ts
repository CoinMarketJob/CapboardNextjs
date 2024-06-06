import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const plansId = parseInt(params.id, 10);

  const classes = await prisma.plans.findUnique({
    where: { id: plansId },
  });

  return NextResponse.json(classes);
}
