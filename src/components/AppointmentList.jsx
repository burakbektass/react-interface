import AppointmentInfo from "./AppointmentInfo";
import {useCallback, useEffect } from "react";

const AppointmentList = ({
  apList,
  setApList,
  query,
  onQueryChange,
  orderBy,
  sortBy,
  onOrderByChange,
  onsetSortByChange,
}) => {
  

  const fetchData = useCallback(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => setApList(data));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const onDeleteAppointment = (id) => {
    setApList(apList?.filter((appointment) => appointment.id !== id));
  };

  const filteredAppointments = apList
    ?.filter((item) => {
      return (
        item.petName.toLowerCase().includes(query.toLowerCase()) ||
        item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
        item.aptNotes.toLowerCase().includes(query.toLowerCase())
      );
    })
    ?.sort((a, b) => {
      const order = orderBy === "asc" ? 1 : -1;
      return a[sortBy]?.toLowerCase() < b[sortBy]?.toLowerCase()
        ? -1 * order
        : 1 * order;
    });

  return (
    <ul className="divide-y divide-gray-200">
      {filteredAppointments?.map((item) => (
        <AppointmentInfo
          key={item.id}
          item={item}
          onDeleteAppointment={onDeleteAppointment}
        />
      ))}
    </ul>
  );
};

export default AppointmentList;
