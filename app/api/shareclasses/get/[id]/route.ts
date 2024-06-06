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

  return NextResponse.json(classes);
}
