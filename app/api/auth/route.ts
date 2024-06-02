import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"

export async function POST(request: Request) {
  const body = await request.json();
  const {
    name,
    email,
    password
  } = body; // Modal'dan gelen verileri al
  
  const hashedPassword = await bcrypt.hash(password, 10);

  const auth = await prisma.user.create({
    data: {
        name,
        email,
        hashedPassword
    }
  });

  return NextResponse.json(auth);
}
