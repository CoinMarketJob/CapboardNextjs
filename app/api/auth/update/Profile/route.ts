import { getCurrentUser } from "@/app/actions/getCurrentUser";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name } = body;

  const currentUser = await getCurrentUser();

  const classes = await prisma.user.update({
    where: { id: currentUser?.id },
    data: {
        name: name
    },
  });

  return NextResponse.json(classes);
}
