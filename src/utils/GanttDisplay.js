import {
  GanttComponent,
  ColumnsDirective,
  ColumnDirective,
  Edit,
  Inject,
  Toolbar,
  Selection,
} from "@syncfusion/ej2-react-gantt";
import { Button } from "react-bootstrap";
import "./GantDisplay.css";

export default function GanttDisplay({ chartData }) {
  //Variables for component props
  const taskValues = {
    id: "id",
    name: "Name",
    startDate: "StartTime",
    endDate: "EndTime",
  };

  const editOptions = {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    mode: "Dialog",
  };
  let current = "";

  //handler function for Button events
  function handleNewTask() {
    current.editModule.dialogModule.openAddDialog();
  }

  function handleEditTask() {
    current.editModule.dialogModule.openEditDialog();
  }

  return (
    <div>
      <div className="master__Buttons">
        <div className="master__ButtonChild1">
          <Button size="sm" onClick={() => handleNewTask()}>
            New Task
          </Button>
        </div>
        <div className="master__ButtonChild2">
          <Button size="sm" onClick={() => handleEditTask()}>
            Edit Task
          </Button>
        </div>
      </div>
      <br />
      <div className="master__ganttChart">
        <GanttComponent
          dataSource={chartData}
          taskFields={taskValues}
          editSettings={editOptions}
          toolbar={["Add", "Edit", "Delete", "Update", "Cancel"]}
          allowSelection={true}
          ref={(gantt) => (current = gantt)}
        >
          <Inject services={[Edit, Toolbar, Selection]}></Inject>
          <ColumnsDirective>
            <ColumnDirective field="id" headerText="Sr. No."></ColumnDirective>
            <ColumnDirective field="Name" headerText="Name"></ColumnDirective>
            <ColumnDirective
              field="StartTime"
              format="dd-MMM-yy"
            ></ColumnDirective>
            <ColumnDirective
              field="EndTime"
              format="dd-MMM-yy"
            ></ColumnDirective>
            <ColumnDirective
              field="Status"
              headerText="Status"
            ></ColumnDirective>
          </ColumnsDirective>
        </GanttComponent>
      </div>
    </div>
  );
}
