import { useState, useEffect } from "react";
import { Box } from "./components/Box";
import { Categories } from "./components/Categories";
import { QueryClient, QueryClientProvider } from "react-query";
import { useSearchParams } from "./api-data";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  );
}

const Main = () => {
  const [businesses, setBusinesses] = useState([]);
  const { isLoading, error, data } = useSearchParams();

  useEffect(() => {
    if (data) {
      setBusinesses(data.businesses);
      // console.log(data);
    }
  }, [data]);
  return (
    <>
      <Categories />
      <div className="grid grid-cols-12 p-4 gap-2">
        <>
          {isLoading && <div>Loading...</div>}
          {error && <div>Something went wrong</div>}
          {businesses.map((business) => (
            <Box businessDetails={business} key={business.id} />
          ))}
        </>
      </div>
    </>
  );
};

export default App;
