import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const {
    name,
    nominalPrice,
    Note
  } = body; // Modal'dan gelen verileri al
  

  const auth = await prisma.shareClasses.create({
    data: {
        name: name,
        nominalPrice: nominalPrice,
        Note: Note
    }
  });

  return NextResponse.json(auth);
}
