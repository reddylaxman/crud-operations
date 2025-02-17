import React from "react";
// import { MyNavbar } from "./components/MyNavbar";
import { Route, Routes } from "react-router-dom";
// import { Dashboard } from "./pages/Dashboard";
// import { Classrooms } from "./pages/Classrooms";
// import { Assessments } from "./pages/Assessments";
// import { Calendar } from "./pages/Calendar";
// import { Store } from "./pages/Store";
// import { News } from "./pages/News";
// import { Blog } from "./pages/Blog";
// import { PageNotFound } from "./pages/PageNotFound";
// import { Profile } from "./components/Profile";
// import { MyAccount } from "./pages/MyAccount";
// import { MySettings } from "./pages/MySettings";
import Home from "./crudcomponents/Home";
import Create from "./crudcomponents/Create";
import Edit from "./crudcomponents/Edit";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:userId" element={<Edit />} />
      </Routes>
    </div>
  );
};

export default App;

{
  /*
    <div>

      <MyNavbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/classrooms" element={<Classrooms />} />
        <Route path="/assessments" element={<Assessments />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/store" element={<Store />} />
        <Route path="/news" element={<News />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="/profile/myaccount" element={<MyAccount />} />
          <Route path="/profile/mysettings" element={<MySettings />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
    */
}
