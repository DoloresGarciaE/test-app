'use client'
import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
  StrictMode,
} from "react";
import { AgGridReact } from 'ag-grid-react';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-alpine.css';

import {
  ColDef,
  ColGroupDef,
  GridApi,
  GridOptions,
  createGrid,
} from "ag-grid-community";// React Grid Logic
import "ag-grid-community/styles/ag-grid.css";
// Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css";
import { createRoot } from "react-dom/client";
import DeleteIcon from '@mui/icons-material/Delete';


export default function Home() {

  const CustomButtonComponent = () => {
    return <button onClick={() => window.alert("deleted")}><DeleteIcon /></button>;
  };


  const [columnDefs] = useState([
    { headerName: 'First Name', field: 'first_name', rowDrag: true },
    { headerName: 'Last Name', field: 'last_name' },
    { headerName: 'Job Title', field: 'job_title' },
    { field: 'office' },
    { field: 'email' },
    { field: 'phone' },
    {
      field: "electric",
      cellEditor: "agCheckboxCellEditor",
    },
    { field: "button", cellRenderer: CustomButtonComponent, flex: 1 }
    ]);
  
  const [rowData] = useState([
    { first_name: 'John', last_name: 'Doe', job_title: 'Software Engineer', office: 'Buenos Aires', email: 'email@dominio.com', phone: '1234', electric: true },
    { first_name: 'Jane', last_name: 'Doe', job_title: 'Software Engineer', office: 'Cordoba' },
    { first_name: 'John', last_name: 'Doe', job_title: 'Software Engineer', email: 'email2@dominio.com', phone: '1234' },
    { first_name: 'John', last_name: 'Doe', job_title: 'UX/UI Designer', office: 'Neuquen', email: 'email3@dominio.com', phone: '21354364' },
    { first_name: 'John', last_name: 'Doe', job_title: 'Software Engineer', office: 'Tucuman', email: 'email4dominio.com', phone: '67876345' },
  
  ]);

  const defaultColDef = useMemo<ColDef>(() => {
    return {
      width: 200,
      editable: true,
    };
  }, []);

  const onCellClicked = useCallback((params) => {
      window.alert(`Cell clicked: ${params.value}`);
  }, []);

  return (
    <div
    className="ag-theme-quartz-dark" // applying the Data Grid theme
    style={{ height: 500 }} // the Data Grid will fill the size of the parent container
   >
     <AgGridReact
         rowData={rowData}
         columnDefs={columnDefs}
         defaultColDef={defaultColDef}
         onCellClicked={onCellClicked}
     />
   </div>

  );
}
