import { getCurrentUser } from "@/app/actions/getCurrentUser";
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

  const currentUser = await getCurrentUser();

  const log = await prisma.logRecord.create({
    data: {
      userId: currentUser?.id,
      type: "View",
      page: "Stakeholders"
    }
  });

  return NextResponse.json(stakeholder);
}
