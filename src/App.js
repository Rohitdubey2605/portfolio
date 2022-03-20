import "./App.css";
import MainHeader from "./components/MainHeader/MainHeader";
import Profile from "./components/Profile/Profile";
import { Fragment } from "react";
import Navigation from "./components/MainHeader/Navigation";
import HomeData from "./components/DataContainer/HomeData";
import BioData from "./components/DataContainer/BioData";
import { Route } from "react-router-dom";
import WorkData from "./components/DataContainer/WorkData";
import { Redirect } from "react-router-dom";
import ProjectsData from "./components/DataContainer/ProjectsData";
import ContactData from "./components/DataContainer/ContactData";
import MainFooter from "./components/MainFooter/MainFooter";

function App() {
  return (
    <Fragment>
      <MainHeader />
      <Profile></Profile>
      <Navigation />
      <main>
        <Route path="/" exact>
          <Redirect to="/home"></Redirect>
        </Route>
        <Route path="/home">
          <HomeData />
        </Route>
        <Route path="/bio">
          <BioData />
        </Route>
        <Route path="/work">
          <WorkData />
        </Route>
        <Route path="/projects">
          <ProjectsData />
        </Route>
        <Route path="/contact">
          <ContactData />
        </Route>
      </main>
      <MainFooter></MainFooter>
    </Fragment>
  );
}

export default App;
