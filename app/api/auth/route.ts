import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"
import { getCurrentUser } from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
  const body = await request.json();
  const {
    name,
    email,
    password
  } = body; // Modal'dan gelen verileri al
  
  const hashedPassword = await bcrypt.hash(password, 10);

  const currentUser = await getCurrentUser();

  const auth = await prisma.user.create({
    data: {
        name,
        email,
        hashedPassword
    }
  });

  const log = await prisma.logRecord.create({
    data: {
      userId: currentUser?.id,
      type: "Create",
      page: "Collabarators"
    }
  });

  return NextResponse.json(auth);
}
