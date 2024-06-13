import { getCurrentUser } from "@/app/actions/getCurrentUser";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"

export async function POST(request: Request) {
  const body = await request.json();
  const { 
    newPassword } = body;
    
  const hashedNewPassword = await bcrypt.hash(newPassword, 10);
  
  const currentUser = await getCurrentUser();


    const classes = await prisma.user.update({
      where: { id: currentUser?.id },
      data: {
        hashedPassword: hashedNewPassword,
      },
    });

    return NextResponse.json(classes);
}
