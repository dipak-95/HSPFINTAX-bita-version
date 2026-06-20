import { Routes, Route, useLocation, Outlet } from "react-router-dom";
import { useEffect } from "react";

/* PUBLIC COMPONENTS */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* PUBLIC PAGES */
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import FAQ from "./Pages/FAQ";
import Services from "./Pages/Services";

/* PORTAL/DASHBOARD PAGES & LAYOUTS */
/* AUTH */
import Login from "./Pages/Portal/Login";
import ChangePassword from "./Pages/Portal/ChangePassword";

/* DASHBOARD LAYOUTS */
import Admin from "./Dashboards/Admin";
import Employee from "./Dashboards/Employee";
import Client from "./Dashboards/Client";

/* ADMIN DASHBOARD + PAGES */
import AdminDashboard from "./Dashboards/AdminDashboard";
import CreateEmployee from "./Pages/Portal/CreateEmployee";
import CreateClient from "./Pages/Portal/CreateClient";
import ClientRequest from "./Pages/Portal/ClientRequest";
import GetClient from "./Dashboards/GetClient";
import GetEmployee from "./Dashboards/GetEmployee";
import EmployeeWork from "./Pages/Portal/EmployeeWork";
import AdminContact from "./Pages/Portal/Contact"; // Renamed to avoid name collision with public Contact

/* EMPLOYEE DASHBOARD + PAGES */
import EmployeeDashboard from "./Dashboards/EmployeeDashboard";
import EmployeeCreateClient from "./Pages/Portal/EmployeeCreateClient";
import EmployeeMyClient from "./Pages/Portal/EmployeeMyclient";
import EmployeeClientWork from "./Pages/Portal/EmployeeClientWork";

/* CLIENT DASHBOARD */
import ClientDashboard from "./Dashboards/ClientDashboard";

/* TOAST Container */
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* INSPECT DISABLE UTILITY */
import { useDisableInspect, SecurityToast } from "./utils/disableInspect";

export default function App() {
  const toast = useDisableInspect();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }, [location.pathname]);

  return (
    <>
      {/* ================= TOAST ================= */}
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover={false}
        draggable={false}
        limit={3}
        theme="light"
      />

      <Routes>
        {/* ================= PUBLIC SITE ================= */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/service" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* ================= PORTAL AUTH ================= */}
        <Route path="/login" element={<Login />} />
        <Route path="/change-password" element={<ChangePassword />} />

        {/* ================= ADMIN PORTAL ================= */}
        <Route path="/admin" element={<Admin />}>
          <Route index element={<AdminDashboard />} />
          <Route path="clients" element={<GetClient />} />
          <Route path="clients/:clientId" element={<EmployeeClientWork />} />
          <Route path="employee" element={<GetEmployee />} />
          <Route path="employee-work" element={<EmployeeWork />} />
          <Route path="create-employee" element={<CreateEmployee />} />
          <Route path="create-client" element={<CreateClient />} />
          <Route path="client-requests" element={<ClientRequest />} />
          <Route path="contact" element={<AdminContact />} />
        </Route>

        {/* ================= EMPLOYEE PORTAL ================= */}
        <Route path="/employee" element={<Employee />}>
          <Route index element={<EmployeeDashboard />} />
          <Route path="clients" element={<EmployeeMyClient />} />
          <Route path="clients/:clientId" element={<EmployeeClientWork />} />
          <Route path="create-client" element={<EmployeeCreateClient />} />
        </Route>

        {/* ================= CLIENT PORTAL ================= */}
        <Route path="/client" element={<Client />}>
          {/* DASHBOARD */}
          <Route index element={<ClientDashboard />} />

          {/* SERVICE STEP */}
          <Route
            path="service/:serviceKey/step/:stepKey"
            element={<ClientDashboard />}
          />
        </Route>
      </Routes>

      {/* 🔔 security toast */}
      <SecurityToast
        message={toast.message}
        show={toast.show}
      />
    </>
  );
}

function PublicLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
