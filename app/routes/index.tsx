import { useLoaderData } from "@remix-run/react";
import ResultsPane from "~/components/resultsPane";
import { ExampleExchangeQueryDocument, execute } from "../../.graphclient";

export async function loader() {
  return execute(ExampleExchangeQueryDocument, {});
}

export default function Index() {
  const {
    data: { collections, executionStrategies },
  } = useLoaderData();

  return (
    <div className="font-sans leading-6 h-screen">
      <header>
        <nav className="flex flex-row justify-center">
          <h1 className="text-3xl font-bold underline">
            Testing Querying The Graph API
          </h1>
        </nav>
      </header>
      <div className="flex flex-col border-solid border-2 m-16 py-8 self-stretch">
        <div className="flex flex-row justify-start mx-12 border-solid border-2">
          {collections.map((collection) => (
            <ResultsPane key={collection.id} data={collection} />
          ))}
        </div>
        <div className="flex flex-row justify-start my-6 mx-12 border-solid border-2">
          {executionStrategies.map((strategy) => (
            <ResultsPane key={strategy.id} data={strategy} />
          ))}
        </div>
      </div>
    </div>
  );
}
