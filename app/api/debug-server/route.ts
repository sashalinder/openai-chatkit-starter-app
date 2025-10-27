import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    hasApiKey: !!process.env.OPENAI_API_KEY,
    workflowId: process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID ?? null,
    nodeEnv: process.env.NODE_ENV
  });
}
