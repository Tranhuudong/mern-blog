import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import SignIn from "./page/SignIn";
import SignUp from "./page/SignUp";
import Header from "./components/Header";
import Profile from "./page/Profile";
import PrivateRoute from "./components/PrivateRoute";
import CreateListing from "./page/CreateListing";
import UpdateListing from "./page/UpdateListing";
import Listing from "./page/Listing";
import Search from "./page/Search";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/listing/:listingId" element={<Listing />}></Route>
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/create-listing" element={<CreateListing />}></Route>
          <Route path="/update-listing/:listingId" element={<UpdateListing />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
