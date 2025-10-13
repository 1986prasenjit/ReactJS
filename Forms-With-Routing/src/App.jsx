import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <>
      <div className="w-full">
        <h1 className="text-3xl text-center font-bold font-sans uppercase text-red-500 mb-4">
          Form In React
        </h1>
        <div>
          {/* <LoginForm /> */}
          <Signup />
        </div>
      </div>
    </>
  );
}

export default App;
