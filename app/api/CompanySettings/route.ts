import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const {
    logoUrl,
    name,
    country,
    currency,
    url,
    showShareNumber,
    isAnSpv
  } = body; // Modal'dan gelen verileri al

  const stakeholder = await prisma.companybasicinfo.update({
    where: { id: 1 },
    data: {
        logoUrl,
        name,
        country,
        currency,
        url,
        showShareNumber,
        isAnSpv
    },
  });

  return NextResponse.json(stakeholder);
}
