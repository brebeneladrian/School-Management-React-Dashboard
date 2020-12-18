import React from "react";
import { CCard, CCardBody, CCardHeader, CCol, CDataTable, CRow, CButton} from "@coreui/react";
import usersData from "../../users/UsersData";
import { Link } from 'react-router-dom';

const fields = ['id', 'name', 'class', 'registered', 'parent', 'phone', 'address', 'status']

const Students = () => {
  return (
          <CRow>
              <CCol xs="12">
            <CCard>
              <CCardHeader>
               Students
              </CCardHeader>
              <CCardBody>
                <CDataTable
                  items={usersData}
                  fields={fields}
                  bordered
                  columnFilter
                  tableFilter
                  footer
                  itemsPerPageSelect
                  itemsPerPage={10}
                  pagination
                  hover
                  sorter
                  scopedSlots = {
                    <td>
                      <Link to='/add-student'> <CButton color="info">Edit</CButton></Link>
                    </td>
                  }
                />
              </CCardBody>
            </CCard>
          </CCol>
          </CRow>
  );
};

export default Students;
