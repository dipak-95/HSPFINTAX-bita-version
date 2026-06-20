import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  Pencil,
  Trash2,
  Eye,
  Mail,
  Phone,
  Plus,
  X
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function GetClient() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  // add service state
  const [showModal, setShowModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [service, setService] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const res = await axios.get(
        window.API_BASE_URL + "/client/admin/clients",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        }
      );
      setClients(res.data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteClient = async (id) => {
    if (!window.confirm("Delete this client?")) return;
    try {
      await axios.delete(
        `${window.API_BASE_URL}/client/admin/client/${id}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        }
      );
      fetchClients();
    } catch {
      alert("Delete failed");
    }
  };

  /* ================= ADD SERVICE ================= */

  const openServiceModal = (client) => {
    setSelectedClient(client);
    setService("");
    setShowModal(true);
  };

  const addService = async () => {
    if (!service) return alert("Select a service");

    try {
      console.log("CLIENT ID:", selectedClient?._id);
      console.log("SERVICE:", service);

      await axios.post(
        `${window.API_BASE_URL}/client/${selectedClient._id}/add-service`,
        {
          serviceKey: service
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        }
      );

      setShowModal(false);
      fetchClients();
    } catch (err) {
      alert(err.response?.data?.msg || "Failed to add service");
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
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-blue-600">Clients</h1>
        <p className="text-sm text-slate-500">
          Manage and view all registered clients
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {clients.map(client => {
          const services = client.services || [];
          const isCompleted =
            services.length > 0 &&
            services.every(s => s.status === "completed");

          return (
            <motion.div
              key={client._id}
              className="relative bg-white rounded-3xl shadow-lg p-7 flex flex-col"
            >
              <span
                className={`absolute top-5 right-5 px-3 py-1 rounded-full text-xs font-medium
                  ${isCompleted
                    ? "bg-green-100 text-green-700"
                    : "bg-blue-100 text-blue-700"
                  }`}
              >
                {isCompleted ? "Completed" : "In Progress"}
              </span>

              <div className="mb-6">
                <h3 className="text-xl font-semibold">{client.name}</h3>
                <div className="mt-3 space-y-1 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <Mail size={16} /> {client.email}
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={16} /> {client.phone || "-"}
                  </div>
                </div>
              </div>

              <div className="mt-auto flex justify-between items-center">
                <button
                  onClick={() =>
                    navigate(`/admin/clients/${client._id}`)
                  }
                  className="flex items-center gap-1 text-blue-600 text-sm"
                >
                  <Eye size={16} /> View Work
                </button>

                <div className="flex gap-3">
                  <button
                    onClick={() => openServiceModal(client)}
                    className="p-2 rounded-xl bg-green-50 hover:bg-green-100 text-green-600"
                  >
                    <Plus size={16} />
                  </button>

                  <button
                    onClick={() =>
                      navigate(`/admin/create-client?id=${client._id}`)
                    }
                    className="p-2 rounded-xl bg-slate-100"
                  >
                    <Pencil size={16} />
                  </button>

                  <button
                    onClick={() => deleteClient(client._id)}
                    className="p-2 rounded-xl bg-red-50 text-red-600"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ADD SERVICE MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-80 p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3"
            >
              <X size={18} />
            </button>

            <h3 className="text-lg font-semibold mb-4">
              Add New Service
            </h3>

            <select
              value={service}
              onChange={e => setService(e.target.value)}
              className="w-full rounded-lg px-3 py-2 text-sm bg-slate-100"
            >
              <option value="">Select Service</option>
              <option value="loan">Loan</option>
              <option value="subsidy">Subsidy</option>
              <option value="audit">Audit</option>
            </select>

            <div className="flex justify-end gap-3 mt-6">
              <button onClick={() => setShowModal(false)}>Cancel</button>
              <button
                onClick={addService}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
              >
                Add Service
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
