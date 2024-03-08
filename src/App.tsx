import { Layout } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./config/routes";
import Navbar from "./components/Navbar/Navbar";
import "./app.scss";

function App() {
  const { Header, Content } = Layout;
  return (
      <Layout>
        <Content>
          <BrowserRouter>
        <Header className="header">
        <Navbar />
        </Header>
      
            <Routes>
              {routes.map((route,index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Routes>
          </BrowserRouter>
        </Content>
      </Layout>
  );
}

export default App;
