import { Suspense, useContext } from "react";
import { ThemeContext } from "./Contexts/ThemeContext";
import { Header, Draft, Loading } from "./Components";

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <main className={theme}>
      <section className="max-w-screen-xl w-full m-auto p-2">
        <Suspense fallback={<Loading />}>
          <Header />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Draft />
        </Suspense>
      </section>
    </main>
  );
};

export default App;
