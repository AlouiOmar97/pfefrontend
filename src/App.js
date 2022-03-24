import "./App.css";
import { React, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { /* BrowserRouter as Router, */ Switch, Route } from "react-router-dom";

import Profile from "./components/User/profile";

import FooterBack from "./components/BackOffice/FooterBack";
import DashBoard from "./components/BackOffice/DashBoard";
import Products from "./components/BackOffice/Products";
import Events from "./components/BackOffice/Events";
import AddPostForm from "./components/Posts/addPostForm";
import UpdatePostForm from "./components/Posts/updatePostForm";
import PostDetails from "./components/Posts/postDetails";
import { UserContext } from "./contexts/userContext";
import HomeEvent from "./components/Events/homeEvent";
import eventWithId from "./components/Events/eventWithId";
import jwtDecode from "jwt-decode";

import LoginForm from "./components/auth/loginForm";
import RegisterForm from "./components/auth/registerForm";
import EditProfileForm from "./components/User/editProfileForm";
import ProductLists from "./components/Products/ProductsLists1";
//import Load from "./components/load";
import ProductDetails from "./components/Products/ProductDetails";
import UserProfile from "./components/User/userprofile";
import LoginGoogle from "./components/auth/loginGoogle";
import RegisterGoogle from "./components/auth/registerGoogle";
import Files from "./components/Files";
import NavBarBack from './components/BackOffice/navBarBack';
import SideBarBack from "./components/BackOffice/sideBarBack";

function App() {
  const [connectedUser, setConnectedUser] = useState(null);
  //const jwtToken = localStorage.getItem("jwt");
  //console.log(jwtToken);

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      // Set auth token header auth
      setConnectedUser(jwtDecode(localStorage.getItem("jwt"))); // Decode token and get user info and exp
    }
  }, []);
  function handleLoggedIn(user) {
    setConnectedUser(user);
  }
  console.log(connectedUser);
  return (
    <>
      {(() => {
        if ("admin" === "admin") {
          return (
            <>
              <UserContext.Provider value={[connectedUser, setConnectedUser]}>
                <NavBarBack></NavBarBack>
                <SideBarBack></SideBarBack>
                <Switch>
                  <Route path="/Products" component={Products} />
                  <Route path="/Events" component={Events} />
                  <Route exact to="/" component={DashBoard} />
                </Switch>
                <FooterBack></FooterBack>
              </UserContext.Provider>
            </>
          );
        } else {
          return (
            <>
              <UserContext.Provider
                value={
                  ([connectedUser, setConnectedUser],
                  {
                    connectedUser: connectedUser,
                    onLoggedIn: handleLoggedIn,
                  })
                }
              >
                <Navbar></Navbar>
                <Switch>
                  <Route path="/files" component={Files}></Route>
                  <Route path="/auth/login" component={LoginForm} />
                  <Route
                    path="/auth/loginGoogle/:token"
                    component={LoginGoogle}
                  />
                  <Route
                    path="/auth/registerGoogle/:token"
                    component={RegisterGoogle}
                  />
                  <Route path="/auth/register" component={RegisterForm} />
                  <Route path="/user/userProfile" component={UserProfile} />
                  <Route
                    path="/user/editprofile/:id"
                    component={EditProfileForm}
                  />
                  <Route path="/user/profile" component={Profile} />
                  <Route path="/Products" component={ProductLists} />
                  <Route
                    path="/ProductDetails/:id"
                    component={ProductDetails}
                  />
                  <Route path="/event/addPost/:id" component={AddPostForm} />
                  <Route path="/event/post/:id" component={PostDetails} />
                  <Route
                    path="/event/updatePost/:id"
                    component={UpdatePostForm}
                  />
                  <Route path="/event" component={HomeEvent} />
                  <Route
                    path="/eventDetails/:eventId"
                    component={eventWithId}
                  />
                  <Route exact to="/" component={Home} />
                </Switch>
                <Footer />
              </UserContext.Provider>
            </>
          );
        }
      })()}
    </>
  );
}

export default App;
