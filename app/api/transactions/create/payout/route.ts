import { getCurrentUser } from "@/app/actions/getCurrentUser";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = await request.json();
    const {
        date,
        Retention,
        stakeholder,
        TotalPayment,
        internalNote,
    } = body;


    const transaction = await prisma.transaction.create({
        data: {
            type: "Payout",
            date: new Date(date),
            stakeholderId: parseInt(stakeholder, 10),
            retention: parseFloat(Retention),
            totalPayment: parseInt(TotalPayment, 10),
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
