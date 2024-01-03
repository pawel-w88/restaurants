import { useState, useEffect } from "react";
import { Box } from "./components/Box";
import { Categories } from "./components/Categories";
import { QueryClient, QueryClientProvider } from "react-query";
import { useSearchParams } from "./api-data";

const queryClient = new QueryClient();

const Main = () => {
  const [businesses, setBusinesses] = useState([]);
  const { isLoading, error, data } = useSearchParams();

  useEffect(() => {
    data && setBusinesses(data.businesses);
  }, [data]);

  console.log(data);
  console.log(businesses);
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>Something went wrong</div>}
      {businesses &&
        businesses.map((business) => (
          <Box businessDetails={business} key={business.id} />
        ))}
    </>
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Categories />
      </div>
      <div className="grid grid-cols-12 p-4 gap-2">
        <Main />
      </div>
    </QueryClientProvider>
  );
}

export default App;
