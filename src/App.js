import "./App.css";
import MainHeader from "./components/MainHeader/MainHeader";
import Profile from "./components/Profile/Profile";
import { Fragment } from "react";
import Navigation from "./components/MainHeader/Navigation";
import HomeData from "./components/DataContainer/HomeData";

function App() {
  return (
    <Fragment>
      <MainHeader />
      <Profile></Profile>
      <Navigation />
      <HomeData />
    </Fragment>
  );
}

export default App;
