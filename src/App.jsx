/**
 *  Basic Layout of the App
 *
 *  - Header
 *    - Logo
 *    - Navbar (Home / About / Cart)
 *
 *  - Body
 *    - Search bar components
 *    - Restaurant Container
 *      - Restaurant Card
 *
 *  - Footer
 *    - Copyright
 *    - Links
 */

import Header from "./components/Header";
import Body from "./components/Body";

const App = () => {
  return (
    <div className="container mx-auto px-3">
      <Header />
      <Body />
    </div>
  );
};

export default App;
