import axios from "axios";

export default function EmployeeService({ client, service }) {

  const updateStatus = async (subIndex, status) => {
    await axios.patch(
      window.API_BASE_URL + "/client/update-substep",
      {
        clientId: client._id,
        stepKey: service.key,
        subIndex,
        status
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      }
    );
    window.location.reload(); // simple refresh
  };

  return (
    <div className="bg-white rounded-xl shadow p-4 mb-4">
      <h3 className="font-semibold mb-2">{service.title}</h3>

      {service.subSteps.map((sub, i) => (
        <div
          key={i}
          className="flex justify-between items-center mb-2"
        >
          <span>{sub.title}</span>

          <select
            value={sub.status}
            onChange={e => updateStatus(i, e.target.value)}
            className="border rounded p-1 text-sm"
          >
            <option value="pending">Pending</option>
            <option value="in_progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      ))}
    </div>
  );
}
