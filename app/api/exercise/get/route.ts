import { getCurrentUser } from "@/app/actions/getCurrentUser";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET() {

    const stakeholdersWithGrantTransactions = await prisma.exercising.findMany({ // "stakeholders" modelini kullan
        include: {
            transaction: {
                include: {
                    stakeholder: true
                }
            }
        }
    });

      const currentUser = await getCurrentUser();

      const log = await prisma.logRecord.create({
        data: {
          userId: currentUser?.id,
          type: "View",
          page: "Exercise"
        }
      });

    return NextResponse.json(stakeholdersWithGrantTransactions);
}
