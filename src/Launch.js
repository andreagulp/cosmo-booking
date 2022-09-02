import { useQuery } from "@tanstack/react-query";

function Launch() {
  const { isLoading, error, data } = useQuery(["chukData"], () =>
    fetch("https://lldev.thespacedevs.com/2.2.0/launch").then((res) =>
      res.json()
    )
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  console.log(data);

  return (
    <div>
      <p>launch</p>
      <ul>
        {data.results.map((launch) => {
          return <li key={launch.id}>{launch.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default Launch;
