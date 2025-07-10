import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

//購入履歴検索API
export async function GET(reqest: NextRequest) {
  const url = new URL(reqest.url);
  const userId = url.pathname.split("/").pop();

  try {
    const purchases = await prisma.purchase.findMany({
      where: { userId },
    });

    return NextResponse.json(purchases);
  } catch (err) {
    return NextResponse.json(err);
  }
}
