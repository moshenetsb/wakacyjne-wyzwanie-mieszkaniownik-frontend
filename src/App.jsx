import UserProvider from "./context/UserProvider";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <>
      <UserProvider>
        <LoginForm />
      </UserProvider>
    </>
  );
}

export default App;
