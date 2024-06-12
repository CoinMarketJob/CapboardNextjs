import { getCurrentUser } from "@/app/actions/getCurrentUser";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const {
    id,
    type,
    name,
    lastName,
    contactEmail,
    group,
    address,
    optionalLineOfAddress,
    postalCode,
    cityName,
    country,
    identifier,
    customIdentifier,
    phone,
    birthdate,
    nationality,
    civilStatus,
    customDetail,
    notes,
  } = body; // Modal'dan gelen verileri al

  const stakeholder = await prisma.stakeholders.update({
    where: { id: id },
    data: {
      type,
      name,
      lastName,
      contactEmail,
      group,
      address,
      optionalLineOfAddress,
      postalCode,
      cityName,
      country,
      identifier,
      customIdentifier,
      phone,
      birthdate,
      nationality,
      civilStatus,
      customDetail,
      notes,
    },
  });

  const currentUser = await getCurrentUser();

  const log = await prisma.logRecord.create({
    data: {
      userId: currentUser?.id,
      type: "Edit",
      page: "Stakeholders"
    }
  });

  return NextResponse.json(stakeholder);
}
