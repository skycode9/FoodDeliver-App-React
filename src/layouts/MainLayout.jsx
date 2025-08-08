import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import UserContext from "../utils/UserContext";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

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
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
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
    </Provider>
  );
};

export default MainLayout;
