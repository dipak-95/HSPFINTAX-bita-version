import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Mail, UserCheck, UserX } from "lucide-react";

export default function GetEmployee() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const res = await axios.get(window.API_BASE_URL + "/auth/employees", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setEmployees(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

 if (loading) {
    return (
        <div className="fixed inset-0 z-[9999] bg-slate-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-5">

        {/* Logo / Brand */}
        <div className="text-3xl font-bold tracking-wide text-slate-800">
          HPS <span className="text-blue-600">Fintax</span>
        </div>

        {/* Animated Bar */}
        <div className="w-48 h-1.5 bg-slate-200 rounded-full overflow-hidden">
          <div className="h-full w-1/3 bg-blue-600 rounded-full animate-hps-loader" />
        </div>

        {/* Text */}
        <p className="text-sm text-slate-600 tracking-wide">
          Processing financial data…
        </p>
      </div>
    </div>
    );
  }


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-2"
    >
      <h2 className="text-2xl font-semibold mb-2 text-blue-400">Employees</h2>
      <h2 className="text-sm mb-6 text-slate-500">Show all Employees and Manage</h2>

      {employees.length === 0 ? (
        <p className="text-slate-500">No employees found</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
         {employees.map((emp, index) => {
  const isActive = emp.isActive === true;

  return (
    <motion.div
      key={emp._id}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">{emp.name}</h3>

        <span
          className={`px-3 py-1 rounded-full text-xs font-medium
            ${
              isActive
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
        >
          {isActive ? "Active" : "Inactive"}
        </span>
      </div>

      <p className="text-sm text-slate-600">{emp.email}</p>
      <p className="capitalize text-sm font-medium mt-2">
        Role: {emp.role}
      </p>
    </motion.div>
  );
})}


        </div>
      )}
    </motion.div>
  );
}
