import { getCurrentUser } from "@/app/actions/getCurrentUser";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET() {

  
  const currentUser = await getCurrentUser();

  const stakeholder = await prisma.user.findMany();

  const log = await prisma.logRecord.create({
    data: {
      userId: currentUser?.id,
      type: "View",
      page: "Collabarators"
    }
  });

  return NextResponse.json(stakeholder);
}
