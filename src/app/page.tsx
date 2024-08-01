'use client'
import React, { useMemo } from "react";
import { AgGridReact } from 'ag-grid-react';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-alpine.css';
import "ag-grid-community/styles/ag-theme-quartz.css";
import { ColDef } from "ag-grid-community";
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import DeleteIcon from '@mui/icons-material/Delete';
import { Grid } from '@mui/material';

export default function Home() {
  const CustomCellRenderer = (params) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ alignItems: 'center' }}
      >
        <Grid container alignItems="center" justifyContent='space-between'>
          <Grid item>
            <span>{params.value}</span>
          </Grid>
          <Grid item style={{ visibility: isHovered ? 'visible' : 'hidden' }}>
            <DeleteIcon onClick={() => window.alert("deleted")} />
          </Grid>
        </Grid>
      </div>
    );
  };

  const [columnDefs] = React.useState([
    { headerName: '', field: 'first_name', cellRenderer: CustomCellRenderer, flex: 1, rowDrag: true, pivotHeaderHeight: 0 },
  ]);

  const [rowData] = React.useState([
    { first_name: 'John' },
    { first_name: 'Jane' },
    { first_name: 'Jack' },
  ]);

  const defaultColDef = useMemo<ColDef>(() => {
    return {
      editable: true,
    };
  }, []);

  return (
    <div
      className="ag-theme-quartz-dark"
      style={{ height: 500 }}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowDragManaged={true}
        pivotHeaderHeight={0}
      />
    </div>
  );
}
