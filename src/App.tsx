import ProfileHeader from "./pages/ProfileHeader";
import TechStack from "./pages/TechStack";
import Projects from "./pages/Projects";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Main from "./layout/Main";

function App() {
  return (
    <>
      <Header />
      <Main>
        <ProfileHeader />
        <TechStack />
        <Projects />
      </Main>
      <Footer />
    </>
  );
}

export default App;
