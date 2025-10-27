// app/DebugEnv.tsx
"use client";

export function DebugEnv() {
  console.log("WF (client)", process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID);
  return null; // renders nothing
}
