import type { ReactElement } from "react";

// type Collection {

// }

export default function ResultsPane({ data }): ReactElement {
  const cid = `${data.id.substring(0, 6)}...${data.id.substring(
    data.id.length - 4
  )}`;
  const etherScanUrl = `https://etherscan.io/address/${data.id}`;
  return (
    <div className="m-4 border-solid border-2 py-4 px-2 rounded-md">
      {Object.keys(data).map((key) => (
        <div key={data.id} className="flex flex-row justify-between">
          <p className="mr-4">{key}:</p>
          {key === "id" ? (
            <a
              href={etherScanUrl}
              className="text-blue-600 visited:text-purple-600"
            >
              {cid}
            </a>
          ) : (
            <span>{data[key]}</span>
          )}
        </div>
      ))}
    </div>
  );
}
