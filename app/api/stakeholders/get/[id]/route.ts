import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const stakeholderId = parseInt(params.id, 10);

  const stakeholder = await prisma.stakeholders.findUnique({
    where: { id: stakeholderId },
  });

  return NextResponse.json(stakeholder);
}
