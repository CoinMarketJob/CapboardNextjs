import { getCurrentUser } from "@/app/actions/getCurrentUser";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET() {
    const stakeholdersWithGrantTransactions = await prisma.stakeholders.findMany({
        include: {
          transactions: {
            where: {
              type: "Grant"
            },
            include: {
              plan: true
            }
          }
        }
      });

      const currentUser = await getCurrentUser();

      const log = await prisma.logRecord.create({
        data: {
          userId: currentUser?.id,
          type: "View",
          page: "Grants"
        }
      });

    return NextResponse.json(stakeholdersWithGrantTransactions);
}
