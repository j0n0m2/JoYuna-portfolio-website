import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import GlobalStyle from "./shared/style/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
