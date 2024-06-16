import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import About from "./Components/About.jsx";
import Services from "./Components/Service/Services.jsx";
import Hotel from "./Components/Bookings/Hotel/Hotel.jsx";
import Packages from "./Components/Bookings/Packages/Packages.jsx";
import Faq from "./Components/Bookings/FAQ/Faq.jsx";
import Train from "./Components/Bookings/Train/Train.jsx";
import MorDes from "./Components/Bookings/MoreDes/MoreDes.jsx";
import Container from "./Components/Container.jsx";
import Login from "./FormControl/Login.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Signup from "./FormControl/Signup.jsx";
import BookHotel from "./Components/Bookings/Hotel/BookHotel.jsx";
import ExploreDes from "./Components/HomeContent/ExploreDes.jsx";
import BookingHistory from "./Components/UserHistory/BookingHistory.jsx";
import ProfilePage from "./Components/UserProfile/ProfilePage.jsx";

const router = createBrowserRouter(
  createRoutesFromChildren(
    <React.Fragment>
      <Route path="login" element={<Login />}></Route>
      <Route path="signup" element={<Signup />}></Route>
      <Route path="history" element={<BookingHistory/>}></Route>
      <Route path="my-profile" element={<ProfilePage/>}></Route>
      <Route path="exploredes/:id" element={<ExploreDes />}></Route>

      <Route path="/" element={<App />}>
        <Route path="" element={<Container />} />

        <Route path="hotel/" element={<Hotel />} />
        <Route path="hotel/booknow/:id" element={<BookHotel />} />

        <Route path="packages" element={<Packages />} />
        <Route path="faq" element={<Faq />} />
        <Route path="trains" element={<Train />} />
        <Route path="more" element={<MorDes />} />

        <Route path="about" element={<About />}></Route>
        <Route path="services" element={<Services />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Route>
    </React.Fragment>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
