import "./App.css";
import GanttDisplay from "./utils/GanttDisplay";

function App() {
  const data = [
    {
      id: 1,
      Name: "Planning",
      StartTime: "4/1/2021",
      EndTime: "4/5/2021",
      Status: "Finished",
    },
    {
      id: 2,
      Name: "Preparation",
      StartTime: "4/5/2021",
      EndTime: "4/6/2021",
      Status: "InProgress",
    },
    {
      id: 3,
      Name: "Procurement",
      StartTime: "4/6/2021",
      EndTime: "4/10/2021",
      Status: "YetToStart",
    },
  ];
  return (
    <div className="body">
      <div className="body__Title">
        <h1>Gantt Chart App</h1>
      </div>
      <GanttDisplay chartData={data} />
    </div>
  );
}

export default App;
