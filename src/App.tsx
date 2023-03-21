import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarListPage from "./pages/CarListPage";
import CarInfoPage from "./pages/CarInfoPage";
import Layout from "./layouts/Layout";

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Routes>
          <Route
            path="/"
            element={
              <Layout title="Car List">
                <CarListPage />
              </Layout>
            }
          />
          <Route
            path="/cars/:id"
            element={
              <Layout title="Car Info">
                <CarInfoPage />
              </Layout>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
