import { getCurrentUser } from "@/app/actions/getCurrentUser";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET() {

  
  const currentUser = await getCurrentUser();

  const stakeholder = await prisma.billingInfo.findUnique({
    where: { id: 1 },
  });

  const log = await prisma.logRecord.create({
    data: {
      userId: currentUser?.id,
      type: "View",
      page: "BillingInfo"
    }
  });

  return NextResponse.json(stakeholder);
}
