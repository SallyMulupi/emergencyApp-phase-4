import NavBar from "./components/NavBar";
import Register from "./components/Register";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NewReportForm from "./components/NewReportForm";

import { useState, useEffect } from "react";


function App() {
  const [user, setUser] = useState(null);
  const [report, setReport] = useState([]);


  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
 



  useEffect(() => {
    fetch("/reports")
      .then((res) => res.json())
      .then((data) => setReport(data));
  }, []);

  const onAddReport = (addNewReport) => {
    setReport([addNewReport, ...report]);
  };
  const handleDeleteReport = (id) => {
    const updateReport = report.filter((report) => report.id !== id);
    setReport(updateReport);
  };

  return (
    <div className="  bg-gradient-to-r from-cyan-50 via-blue to-cyan-200" >
      <NavBar user={user} setUser={setUser} />
      {user ? (
        <>    
 
        <Routes>
        <Route path="/" element={<Home user={user} report={report} onReportDelete={handleDeleteReport}/>} />
        <Route path="/newreportform" element={<NewReportForm user={user}  onAddReport={onAddReport} />} />
        
        </Routes>
        </>
          

      ) : (
        <Routes>
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register />} />

        </Routes>
        
      )}
          
            
            


    </div>
  );
}

export default App;
