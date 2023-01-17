import * as React from "react";

// import MaterialTable from "@material-table/core";
import uuid from "uuid";

export default function ControlledAccordions() {
  // const click = () => {
  //      setExpanded((prev) => !prev);
  // };
  return (
    <>
      <MaterialTable
        title="Basic Fixed Columns Preview"
        columns={[
          { title: "Name", field: "name", width: 150 },
          { title: "Surname", field: "surname", width: 150 },
          {
            title: "Birth Year",
            field: "birthYear",
            type: "numeric",
            width: 150
          },
          {
            title: "Birth Place",
            field: "birthCity",
            lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
            width: 150
          },
          { title: "Name", field: "name", width: 150 },
          { title: "Surname", field: "surname", width: 150 },
          {
            title: "Birth Year",
            field: "birthYear",
            type: "numeric",
            width: 150
          },
          {
            title: "Birth Place",
            field: "birthCity",
            lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
            width: 150
          }
        ]}
        data={[
          { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
          {
            name: "Zerya Betül",
            surname: "Baran",
            birthYear: 2017,
            birthCity: 34
          }
        ]}
        options={{
          fixedColumns: {
            left: 2,
            right: 1
          }
        }}
      />
    </>
  );
}
