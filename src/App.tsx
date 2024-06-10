import { useQuery,
  //  useMutation,
  //   useQueryClient
   } from "@tanstack/react-query";



const getData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
};

interface DataProps {
  userId: number,
  id: number,
  title: string,
  body: string
}

function App() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getData,
  });

  return (
    <>
      <div
        style={{
          padding: `24px`,
        }}
      >
        {isLoading ? (
          <h3>loading...</h3>
        ) : (
          <>
            {data.map((item: DataProps) => {
              return (
                <div key={item.id}>
                  <p>{item.title}</p>
                </div>
              );
            })}
          </>
        )}
        {error && <span>ERROR</span>}
      </div>
    </>
  );
}

export default App;
