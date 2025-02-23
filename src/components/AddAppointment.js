import { useState } from 'react';

const AddAppointment = ({ onSendAppointment, lastId }) => {
  const clearData = {
    petName: '',
    ownerName: '',
    aptNotes: '',
    aptDate: '',
  };

  const [formData, setFormData] = useState(clearData);

  const formDataPublish = () => {
    const appointmentInfo = {
      id: lastId + 1,
      petName: formData.petName,
      ownerName: formData.ownerName,
      aptNotes: formData.aptNotes,
      aptDate: formData.aptDate
    };
    onSendAppointment(appointmentInfo);
    setFormData(clearData);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-[#6466f1] mb-6">New Appointment</h2>
      <div className="space-y-4 animate-fadeIn">
        <div className="relative">
          <input
            type="text"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-[#6466f1] focus:ring-2 focus:ring-[#6466f1]/20 outline-none transition-all text-gray-700 placeholder-gray-400"
            name="petName"
            placeholder="Pet Name"
            value={formData.petName}
            onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
          />
        </div>
        
        <div className="relative">
          <input
            type="text"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-[#6466f1] focus:ring-2 focus:ring-[#6466f1]/20 outline-none transition-all text-gray-700 placeholder-gray-400"
            name="ownerName"
            placeholder="Owner Name"
            value={formData.ownerName}
            onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
          />
        </div>
        
        <div className="relative">
          <textarea
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-[#6466f1] focus:ring-2 focus:ring-[#6466f1]/20 outline-none transition-all text-gray-700 placeholder-gray-400 resize-none h-24"
            name="aptNotes"
            placeholder="Appointment Notes"
            value={formData.aptNotes}
            onChange={(e) => setFormData({ ...formData, aptNotes: e.target.value })}
          />
        </div>
        
        <div className="relative">
          <input
            type="date"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-[#6466f1] focus:ring-2 focus:ring-[#6466f1]/20 outline-none transition-all text-gray-700"
            name="aptDate"
            value={formData.aptDate}
            onChange={(e) => setFormData({ ...formData, aptDate: e.target.value })}
          />
        </div>
        
        <button
          onClick={formDataPublish}
          className="w-full py-3 px-6 rounded-xl bg-[#6466f1] text-white font-medium hover:bg-[#5152c8] transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Schedule Appointment
        </button>
      </div>
    </div>
  );
};

export default AddAppointment; 