import { BiTrash } from 'react-icons/bi';

const AppointmentList = ({ apList, setApList, query }) => {
  const onDeleteAppointment = (appointmentId) => {
    setApList(apList.filter(appointment => appointment.id !== appointmentId));
  };

  // Filtreleme fonksiyonu
  const filteredAppointments = apList.filter(item => {
    return (
      (item.petName?.toLowerCase() || '').includes(query.toLowerCase()) ||
      (item.ownerName?.toLowerCase() || '').includes(query.toLowerCase()) ||
      (item.aptNotes?.toLowerCase() || '').includes(query.toLowerCase())
    );
  });

  return (
    <div>
      <h2 className="text-xl font-semibold text-[#6466f1] mb-6">Appointments</h2>
      <ul className="divide-y divide-gray-100">
        {filteredAppointments.map((appointment) => (
          <li 
            key={appointment.id}
            className="p-4 hover:bg-[#6466f1]/5 rounded-xl transition-colors group animate-fadeIn"
          >
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <h3 className="font-semibold text-[#6466f1] flex items-center gap-2">
                  {appointment.petName}
                  <span className="text-xs font-normal px-2 py-1 bg-[#6466f1]/10 text-[#6466f1] rounded-full">
                    {new Date(appointment.aptDate).toLocaleDateString()}
                  </span>
                </h3>
                <p className="text-sm text-[#6466f1]/80">{appointment.ownerName}</p>
                <p className="text-sm text-gray-500">{appointment.aptNotes}</p>
              </div>
              <button
                onClick={() => onDeleteAppointment(appointment.id)}
                className="opacity-0 group-hover:opacity-100 p-2 hover:bg-red-50 rounded-lg text-[#6466f1] hover:text-[#5152c8] transition-all"
              >
                <BiTrash className="h-5 w-5" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList; 