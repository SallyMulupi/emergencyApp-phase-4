import React, { useState }from "react";
// import Footer from "./Footer";
// import Reports from "./Reports";
import NewReportForm from "./NewReportForm";
import ReportList from "./ReportList";
import './home.css'


const Home = ({ report, onAddReport,user ,onReportDelete}) => {
  const [isHide, setIsHide] = useState(false);
  // const [search, setSearch] = useState();
  const [btnText, setBtnText] = useState("report an emergency");
  const [hideButtom, setHideButton] = useState(false);



  const reportdisplay = report.map((repo) => (
    <ReportList 
    id={repo.id} 
    repo={repo} 
    onReportDelete={onReportDelete}
    />
  ));


  return (
    <div>
    <div className="container-reports">


      <div className="displayuserName">
        <h1 className="userdetails">Welcome {user.username}!!</h1>
      </div>

        <div className="searchbar">
          <input type="text" className="search"  placeholder="search by title" />
          <h3 >Reports display</h3>

        </div>

        {/* Reports */}


        <div className="displayreports">
          <table>
            <thead>
            <tr>
              <th>Time&Date</th>
              <th>Title</th>
              <th>Description</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {reportdisplay}
            </tbody>
          </table>
          </div>
          </div>
        {/* Reportscontainerends */}
      </div>
  );
};

export default Home;
