import { Route, Routes } from "react-router";
import "./App.css";
import Menu from "./Components/Menu";
import Courses from "./Components/Courses";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";
import AddEnquiry from "./Components/AddEnquiry";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Enquiries from  "./Components/Enquiries";
import EnquiryDetails from  "./Components/EnquiryDetails";


function App() {
  return (
    <div>
      <Menu />
      <br />
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/home" Component={Home} />
          <Route path="/courses" Component={Courses} />
          <Route path="/AddEnquiry/:id" Component={AddEnquiry}/>
          <Route path="/Enquiries" Component={Enquiries}/>
          <Route path="/EnquiryDetails/:id" Component={EnquiryDetails}/>
          <Route path="*" Component={NotFound} />
        </Routes>
      </div>
      <br />
      <Footer />
    </div>
  );
}

export default App;
