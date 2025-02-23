import Header from "./components/Header.jsx";
import AddAppointment from "./components/AddAppointment.jsx";
import Search from "./components/Search.jsx";
import AppointmentList from "./components/AppointmentList.jsx";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [apList, setApList] = useState([]);
  const [sortBy, setSortBy] = useState("petName");
  const [orderBy, setOrderBy] = useState("asc");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <Header />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
          <div className="bg-white rounded-2xl shadow-lg shadow-purple-100/50 p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">New Appointment</h2>
            <AddAppointment
              onSendAppointment={(newAppointment) => setApList([...apList, newAppointment])}
              lastId={apList.reduce((max,item) => Number(item.id) > max ? Number(item.id) : max, 0 )}
            />
          </div>
          
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg shadow-purple-100/50 p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Appointments</h2>
              <Search
                query={query}
                onQueryChange={(changedQuery) => setQuery(changedQuery)}
                sortBy={sortBy}
                orderBy={orderBy}
                onSortByChange={(changedSortBy) => setSortBy(changedSortBy)}
                onOrderByChange={(changedOrderBy) => setOrderBy(changedOrderBy)}
              />
              <AppointmentList
                apList={apList}
                setApList={setApList}
                query={query}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
