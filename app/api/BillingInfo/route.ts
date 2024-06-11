import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const {
    fullCompanyName,
    billingContract,
    billingCountry,
    billingAddress,
     PostalCode,              
    vatRegistirationNumber,
    TaxNumber
  
  } = body; // Modal'dan gelen verileri al

  const stakeholder = await prisma.billingInfo.update({
    where: { id: 1 },
    data: {        
      fullCompanyName,
      billingContract,
      billingCountry,
      billingAddress,
      PostalCode,              
      vatRegistirationNumber,
      TaxNumber
    },
  });

  return NextResponse.json(stakeholder);
}
