import { getCurrentUser } from "@/app/actions/getCurrentUser";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET() {
  
  const currentUser = await getCurrentUser();

  const stakeholder = await prisma.user.findUnique({
    where: { id: currentUser?.id },
  });

  return NextResponse.json(stakeholder);
}
