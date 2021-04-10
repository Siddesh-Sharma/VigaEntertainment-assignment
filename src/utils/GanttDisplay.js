import {
  GanttComponent,
  ColumnsDirective,
  ColumnDirective,
  Edit,
  Inject,
  Toolbar,
  Selection,
} from "@syncfusion/ej2-react-gantt";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import "./GantDisplay.css";

export default function GanttDisplay({ chartData }) {
  //prop "chartData" must be an array
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

  //const for tooltip content
  const popover1 = <Tooltip id="popover-basic">{"Add a new Task"}</Tooltip>;
  const popover2 = <Tooltip id="popover-basic">{"Edit existing Task"}</Tooltip>;
  return (
    <div>
      <hr />
      <div className="master__Buttons">
        <div className="master__ButtonChild1">
          {/* on hover event for displaying tooltip */}
          <OverlayTrigger
            trigger="hover"
            placement="bottom"
            delay={100}
            overlay={popover1}
          >
            <Button size="sm" onClick={() => handleNewTask()}>
              New Task
            </Button>
          </OverlayTrigger>
        </div>
        <div className="master__ButtonChild2">
          {/* on hover event for displaying tooltip */}
          <OverlayTrigger
            trigger="hover"
            placement="bottom"
            delay={100}
            overlay={popover2}
          >
            <Button size="sm" onClick={() => handleEditTask()}>
              Edit Task
            </Button>
          </OverlayTrigger>
        </div>
      </div>
      <br />
      <div className="master__ganttChart">
        {/* "GanttComponent" staright from the package takes care of diplaying our chart  */}
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
