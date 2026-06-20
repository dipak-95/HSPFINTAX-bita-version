import { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  Trash2,
  Calendar,
  MessageSquare,
  Eye,
  Copy,
  X
} from "lucide-react";
import { toast } from "react-toastify"; 

export default function Contact() {
  const [contacts, setContacts] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    fetch(window.API_BASE_URL + "/contact")
      .then(res => res.json())
      .then(result => setContacts(result.data || []));
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this inquiry?")) return;

    await fetch(`${window.API_BASE_URL}/contact/${id}`, {
      method: "DELETE",
    });
    toast.success("Client successfully deleted!");

    setContacts(prev => prev.filter(item => item._id !== id));
  };

  return (
    <div className="p-6 bg-slate-50 min-h-screen">

      {/* HEADER */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Contact Inquiries
          </h2>
          <p className="text-sm text-slate-500">
            Manage customer messages
          </p>
        </div>

        <div className="px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm shadow">
          Total : {contacts.length}
        </div>
      </div>

      {/* TABLE CARD */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="p-5 text-left font-semibold">Customer</th>
                <th className="p-5 text-left font-semibold">Contact</th>
                <th className="p-5 text-left font-semibold">Message</th>
                <th className="p-5 text-left font-semibold">Date</th>
                <th className="p-5 text-center font-semibold">Action</th>
              </tr>
            </thead>

            <tbody>
              {contacts.length === 0 ? (
                <tr>
                  <td colSpan="5" className="py-10 text-center text-slate-500">
                    No inquiries available
                  </td>
                </tr>
              ) : (
                contacts.map((c) => (
                  <tr
                    key={c._id}
                    className="hover:bg-slate-50 transition"
                  >

                    {/* CUSTOMER */}
                    <td className="p-5">
                      <div className="flex items-center gap-4">
                        <div
                          className="
                            h-11 w-11 rounded-full
                            bg-gradient-to-br from-blue-600 to-emerald-500
                            text-white font-bold
                            flex items-center justify-center
                            shadow
                          "
                        >
                          {c.name?.charAt(0).toUpperCase()}
                        </div>

                        <div>
                          <p className="font-semibold text-slate-800">
                            {c.name}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* CONTACT */}
                    <td className="p-5 space-y-1 text-slate-600">
                      <div className="flex items-center gap-2">
                        <Mail size={16} />
                        <span>{c.email}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Phone size={16} />
                        <span>{c.mobile}</span>
                      </div>
                    </td>

                    {/* MESSAGE */}
                    <td className="p-5 text-slate-700">
                      <div className="flex items-center justify-between gap-4 max-w-md">

                        <div className="flex items-center gap-2 min-w-0">
                          <MessageSquare
                            size={16}
                            className="text-slate-400 shrink-0"
                          />

                          <p className="truncate max-w-[260px] text-sm">
                            {c.message}
                          </p>
                        </div>

                        <button
                          onClick={() => setSelectedMessage(c)}
                          className="
                            p-2 rounded-full
                            hover:bg-blue-50
                            text-blue-600
                            transition
                          "
                          title="View message"
                        >
                          <Eye size={18} />
                        </button>
                      </div>
                    </td>

                    {/* DATE */}
                    <td className="p-5 text-slate-600">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        {new Date(c.createdAt).toLocaleDateString()}
                      </div>
                    </td>

                    {/* ACTION */}
                    <td className="p-5 text-center">
                      <button
                        onClick={() => handleDelete(c._id)}
                        className="
                          p-2 rounded-lg
                          bg-red-50
                          hover:bg-red-100
                          text-red-600
                          transition
                        "
                        title="Delete"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>

                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ================= MESSAGE MODAL ================= */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden">

            {/* HEADER */}
            <div className="flex justify-between items-center px-6 py-4 border-b">
              <h3 className="font-semibold text-lg">
                Message from {selectedMessage.name}
              </h3>

              <button onClick={() => setSelectedMessage(null)}>
                <X />
              </button>
            </div>

            {/* BODY */}
            <div className="p-6 space-y-4 max-h-[350px] overflow-y-auto text-slate-700 text-sm">
              <p><b>Email:</b> {selectedMessage.email}</p>
              <p><b>Mobile:</b> {selectedMessage.mobile}</p>

              <div className="bg-slate-50 p-4 rounded-lg whitespace-pre-wrap break-words">
                {selectedMessage.message}
              </div>
            </div>

            {/* FOOTER */}
            <div className="flex justify-end gap-3 px-6 py-4 bg-slate-50">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(selectedMessage.message);
                }}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <Copy size={16} />
                Copy
              </button>

              <button
                onClick={() => setSelectedMessage(null)}
                className="px-4 py-2 border rounded-lg"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
