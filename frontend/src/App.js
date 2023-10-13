import { MainPage } from "./components/MainPage";
import { AuthProvider } from "./auth";

function App() {
  return (
    <div>
      <AuthProvider>
        <MainPage />
      </AuthProvider>
    </div>
  );
}

export default App;
