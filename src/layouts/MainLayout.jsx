import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import UserContext from "../utils/UserContext";

const MainLayout = () => {
  const [userName, setUserName] = useState("null");
  //Make a API Call for authentication
  useEffect(() => {
    //call api and received a logged in data
    const data = {
      name: "Akash Amin",
    };
    setUserName(data.name);
  }, []);
  return (
    <UserContext.Provider value={{ loggedInUser: userName }}>
      <div className="min-h-screen flex flex-col">
        <div className="container mx-auto px-3 flex-grow">
          <Header />
          <main>
            <Outlet />
          </main>
        </div>
        <Footer />
      </div>
    </UserContext.Provider>
  );
};

export default MainLayout;
