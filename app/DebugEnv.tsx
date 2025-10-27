"use client";

export default function DebugEnv() {
   console.log("OPENAI_API_KEY (client)", process.env.OPENAI_API_KEY);
  console.log("WF (client)", process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID);
  return null;
}
