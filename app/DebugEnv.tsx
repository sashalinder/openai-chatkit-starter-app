"use client";

export default function DebugEnv() {
  console.log("WF (client)", process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID);
  return null;
}
