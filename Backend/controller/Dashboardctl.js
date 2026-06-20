// const User = require("../model/User");
// const Client = require("../model/Client");


// export const getAdminDashboardStats = async (req, res) => {
//   try {
//     /* ================= COUNTS ================= */
//     const totalEmployees = await User.countDocuments({
//       role: "employee"
//     });

//     const totalClients = await Client.countDocuments();

//     /* ================= MONTHLY CLIENTS ================= */
//     const monthlyClients = await Client.aggregate([
//       {
//         $group: {
//           _id: { $month: "$createdAt" },
//           count: { $sum: 1 }
//         }
//       },
//       { $sort: { _id: 1 } }
//     ]);

//     const months = [
//       "Jan", "Feb", "Mar", "Apr", "May", "Jun",
//       "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
//     ];

//     const formattedMonthlyClients = monthlyClients.map(item => ({
//       month: months[item._id - 1],
//       count: item.count
//     }));

//     res.json({
//       totalEmployees,
//       totalClients,
//       monthlyClients: formattedMonthlyClients
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ msg: "Dashboard data error" });
//   }
// };
// export const getEmployeeDashboardStats = async (req, res) => {
//   try {
//     // TOTAL CLIENTS (ALL CLIENTS CREATED BY ADMIN)
//     const totalClients = await Client.countDocuments();

//     res.status(200).json({
//       totalClients
//     });

//   } catch (error) {
//     console.error("Employee dashboard error:", error);
//     res.status(500).json({
//       msg: "Failed to load employee dashboard data"
//     });
//   }
// };
// export const getClientDashboard = async (req, res) => {
//   try {
//     const client = await Client.findOne({
//       email: req.user.email
//     }).lean();

//     if (!client) {
//       return res.status(404).json({ msg: "Client not found" });
//     }

//     // Pick first service safely
//     const activeService = Array.isArray(client.services)
//       ? client.services[0]
//       : null;

//     // If no service yet
//     if (!activeService) {
//       return res.json({
//         status: client.status,
//         createdAt: client.createdAt,
//         employee: null,
//         service: {
//           serviceName: "Not Assigned",
//           serviceKey: "",
//           workflow: []
//         }
//       });
//     }

//     res.json({
//       status: client.status,
//       createdAt: client.createdAt,
//       employee: client.employee || null,
//       service: {
//         serviceName: activeService.serviceName,
//         serviceKey: activeService.serviceKey,
//         workflow: activeService.workflow || []
//       }
//     });
//   } catch (err) {
//     console.error("Client dashboard error:", err); // 👈 SEE REAL ERROR HERE
//     res.status(500).json({
//       msg: "Server error",
//       error: err.message   // 👈 TEMP: send error to frontend
//     });
//   }
// };


const User = require("../model/User");
const Client = require("../model/Client");

const getAdminDashboardStats = async (req, res) => {
  try {
    const totalEmployees = await User.countDocuments({ role: "employee" });
    const totalClients = await Client.countDocuments();

    const monthlyClients = await Client.aggregate([
      {
        $group: {
          _id: { $month: "$createdAt" },
          count: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } }
    ]);

    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const formattedMonthlyClients = monthlyClients.map(item => ({
      month: months[item._id - 1],
      count: item.count
    }));

    res.json({
      totalEmployees,
      totalClients,
      monthlyClients: formattedMonthlyClients
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Dashboard data error" });
  }
};

const getEmployeeDashboardStats = async (req, res) => {
  try {
    const totalClients = await Client.countDocuments();
    res.status(200).json({ totalClients });
  } catch (error) {
    console.error("Employee dashboard error:", error);
    res.status(500).json({ msg: "Failed to load employee dashboard data" });
  }
};

const getClientDashboard = async (req, res) => {
  try {
    const client = await Client.findOne({
      email: req.user.email
    }).lean();

    if (!client) {
      return res.status(404).json({ msg: "Client not found" });
    }

    const activeService = Array.isArray(client.services)
      ? client.services[0]
      : null;

    if (!activeService) {
      return res.json({
        status: client.status,
        createdAt: client.createdAt,
        employee: null,
        service: {
          serviceName: "Not Assigned",
          serviceKey: "",
          workflow: []
        }
      });
    }

    res.json({
      status: client.status,
      createdAt: client.createdAt,
      employee: client.employee || null,
      service: {
        serviceName: activeService.serviceName,
        serviceKey: activeService.serviceKey,
        workflow: activeService.workflow || []
      }
    });
  } catch (err) {
    console.error("Client dashboard error:", err);
    res.status(500).json({
      msg: "Server error",
      error: err.message
    });
  }
};

module.exports = {
  getAdminDashboardStats,
  getEmployeeDashboardStats,
  getClientDashboard
};
