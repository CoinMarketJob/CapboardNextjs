import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const {
    id,
    name,
    nominalPrice,
    Note
  } = body; // Modal'dan gelen verileri al

  const classes = await prisma.shareClasses.update({
    where: { id: id },
    data: {
        name: name,
        nominalPrice: nominalPrice,
        Note: Note
    },
  });

  return NextResponse.json(classes);
}
