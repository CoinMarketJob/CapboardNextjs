import { getCurrentUser } from "@/app/actions/getCurrentUser";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET() {

  const stakeholder = await prisma.companyBasicInfo.findUnique({
    where: { id: 1 },
  });

  const currentUser = await getCurrentUser();

  const log = await prisma.logRecord.create({
    data: {
      userId: currentUser?.id,
      type: "View",
      page: "Settings"
    }
  });

  return NextResponse.json(stakeholder);
}
