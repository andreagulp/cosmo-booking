import "./App.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// import Jokes from "./Jokes";
import Launch from "./Launch";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <div className="App">
        <header className="App-header">
          <div>
            <Launch />
          </div>
          {/* <Jokes /> */}
        </header>
      </div>
    </QueryClientProvider>
  );
}

export default App;
