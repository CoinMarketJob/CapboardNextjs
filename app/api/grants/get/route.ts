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

    return NextResponse.json(stakeholdersWithGrantTransactions);
}
