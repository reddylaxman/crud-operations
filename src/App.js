import React from "react";
import { MyNavbar } from "./components/MyNavbar";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Classrooms } from "./pages/Classrooms";
import { Assessments } from "./pages/Assessments";
import { Calendar } from "./pages/Calendar";
import { Store } from "./pages/Store";
import { News } from "./pages/News";
import { Blog } from "./pages/Blog";
import { PageNotFound } from "./pages/PageNotFound";

const App = () => {
  return (
    <div>
      <MyNavbar />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/classrooms" element={<Classrooms />} />
        <Route path="/assessments" element={<Assessments />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/store" element={<Store />} />
        <Route path="/news" element={<News />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
};
export default App;
