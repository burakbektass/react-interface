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
    <div className="App container mx-auto mt-3 font-thin">
      <Header />
      <AddAppointment
        onSendAppointment={(newAppointment) => setApList([...apList, newAppointment])}
        lastId={apList.reduce((max,item) => Number(item.id) > max ? Number(item.id) : max, 0 )}
      />
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
        onQueryChange={(changedQuery) => setQuery(changedQuery)}
        sortBy={sortBy}
        orderBy={orderBy}
        onSortByChange={(changedSortBy) => setSortBy(changedSortBy)}
        onOrderByChange={(changedOrderBy) => setOrderBy(changedOrderBy)}
      />
    </div>
  );
}

export default App;
