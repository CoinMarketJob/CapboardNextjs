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
    decimalVesting,
    isAnSpv
  } = body; // Modal'dan gelen verileri al

  const stakeholder = await prisma.companyBasicInfo.update({
    where: { id: 1 },
    data: {
        logoURL: logoUrl,
        name,
        country,
        currency,
        url,
        showShareNumber,
        decimalVesting,
        isAnSpv
    },
  });

  return NextResponse.json(stakeholder);
}
