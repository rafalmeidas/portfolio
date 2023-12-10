import ProfileHeader from "./pages/ProfileHeader";
import TechStack from "./pages/TechStack";
import Header from "./layout/Header";
import Main from "./layout/Main";

function App() {
  return (
    <>
      <Header />
      <Main>
        <ProfileHeader />
        <TechStack />
      </Main>
    </>
  );
}

export default App;
