import { getCurrentUser } from "@/app/actions/getCurrentUser";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const classesId = parseInt(params.id, 10);

  const classes = await prisma.shareClasses.findUnique({
    where: { id: classesId },
  });

  const currentUser = await getCurrentUser();

  const log = await prisma.logRecord.create({
    data: {
      userId: currentUser?.id,
      type: "View",
      page: "ShareClasses"
    }
  });

  return NextResponse.json(classes);
}
