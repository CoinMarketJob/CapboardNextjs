import { getCurrentUser } from "@/app/actions/getCurrentUser";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = await request.json();
    const {
        stakeholder,
        date,
        shareClass,
        totalInvestment,
        numberOfShares,
        issuePrice,
        internalNote
    } = body;


    const transaction = await prisma.transaction.create({
        data: {
            type: "IssueShares",
            date: new Date(date),
            stakeholderId: parseInt(stakeholder, 10),
            shareClassId: parseInt(shareClass, 10),
            totalPayment: parseInt(totalInvestment, 10),
            amount: parseInt(numberOfShares, 10),
            price: parseInt(issuePrice, 10),
            note: internalNote,
        },
    });

    const currentUser = await getCurrentUser();

    const log = await prisma.logRecord.create({
        data: {
            userId: currentUser?.id,
            type: "Create",
            page: "Transactions"
        }
    });


    return NextResponse.json(transaction);
}
