import { getCurrentUser } from "@/app/actions/getCurrentUser";
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
        nominalPrice: parseFloat(nominalPrice),
        Note: Note
    }
  });

  const currentUser = await getCurrentUser();

  const log = await prisma.logRecord.create({
    data: {
      userId: currentUser?.id,
      type: "Create",
      page: "ShareClasses"
    }
  });

  return NextResponse.json(auth);
}
