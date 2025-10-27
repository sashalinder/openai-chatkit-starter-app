import App from "./App";

export default function Home() {
  // Add temporarily in a page/component:
  console.log("WF", process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID);
  return <App />;
}
