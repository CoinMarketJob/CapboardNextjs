import { getCurrentUser } from "@/app/actions/getCurrentUser";
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

  
  const currentUser = await getCurrentUser();

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

  
  const log = await prisma.logRecord.create({
    data: {
      userId: currentUser?.id,
      type: "Edit",
      page: "BillingInfo"
    }
  });

  return NextResponse.json(stakeholder);
}
