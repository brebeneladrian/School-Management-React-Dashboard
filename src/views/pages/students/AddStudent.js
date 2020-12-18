import React from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CForm,
  CFormGroup,
  CInput,
  CLabel, CValidFeedback, CInvalidFeedback, CSelect, CInputFile, CButton, CCardFooter
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const AddStudents = () => {
  return (
    <CCol xs="12">
      <CCard>
        <CForm>
        <CCardHeader>
         Add Student
        </CCardHeader>
        <CCardBody>

          <h4>Student Information</h4>
          <CRow className="my-0">
            <CCol lg="6" sm="12">
              <CLabel htmlFor="firstName">First Name</CLabel>
              <CInput className="form-control-success" id="firstName" />
              <CInvalidFeedback className="help-block">
                Please provide a valid information
              </CInvalidFeedback>
              <CValidFeedback className="help-block">Input provided</CValidFeedback>
            </CCol>
            <CCol lg="6" sm="12">
              <CFormGroup>
                <CLabel htmlFor="lastName">Last Name</CLabel>
                <CInput className="form-control-warning" id="lastName" required />
                <CInvalidFeedback className="help-block">
                  Please provide a valid information
                </CInvalidFeedback>
                <CValidFeedback className="help-block">Input provided</CValidFeedback>
              </CFormGroup>
            </CCol>
          </CRow>

          <CRow className="my-0">
            <CCol lg="6" sm="12">
              <CLabel htmlFor="Student Badge Id">Student Badge Id</CLabel>
              <CInput className="form-control-success" id="studentBadgeId" />
              <CInvalidFeedback className="help-block">
                Please provide a valid information
              </CInvalidFeedback>
              <CValidFeedback className="help-block">Input provided</CValidFeedback>
            </CCol>
            <CCol lg="6" sm="12">
              <CFormGroup>
                <CLabel htmlFor="gender">Gender</CLabel>
                <CSelect custom name="gender" id="gender">
                  <option>Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </CSelect>
                <CInvalidFeedback className="help-block">
                  Please provide a valid information
                </CInvalidFeedback>
                <CValidFeedback className="help-block">Input provided</CValidFeedback>
              </CFormGroup>
            </CCol>
          </CRow>

          <CRow className="my-0">
            <CCol lg="6" sm="12">
              <CFormGroup>
                <CLabel htmlFor="dateOfBirth">Date of Birth</CLabel>
                <CInput type="date" id="dateOfBirth" name="dateOfBirth" placeholder="date" />
                <CInvalidFeedback className="help-block">
                  Please provide a valid information
                </CInvalidFeedback>
                <CValidFeedback className="help-block">Input provided</CValidFeedback>
              </CFormGroup>
            </CCol>
            <CCol lg="6" sm="12">
              <CFormGroup>
                <CLabel htmlFor="class">Class</CLabel>
                <CInput className="form-control-success" id="class" />
                <CInvalidFeedback className="help-block">
                  Please provide a valid information
                </CInvalidFeedback>
                <CValidFeedback className="help-block">Input provided</CValidFeedback>
              </CFormGroup>
            </CCol>
          </CRow>

          <CRow className="my-0">
            <CCol lg="6" sm="12">
              <CFormGroup>
                <CLabel htmlFor="religion">Religion</CLabel>
                <CInput className="form-control-success" id="religion" />
                <CInvalidFeedback className="help-block">
                  Please provide a valid information
                </CInvalidFeedback>
                <CValidFeedback className="help-block">Input provided</CValidFeedback>
              </CFormGroup>
            </CCol>
            <CCol lg="6" sm="12">
              <CFormGroup>
                <CLabel htmlFor="joiningDate">Joining Date</CLabel>
                <CInput type="date" id="dateOfBirth" name="joiningDate" placeholder="date" />
                <CInvalidFeedback className="help-block">
                  Please provide a valid information
                </CInvalidFeedback>
                <CValidFeedback className="help-block">Input provided</CValidFeedback>
              </CFormGroup>
            </CCol>
          </CRow>

          <CRow className="my-0">
            <CCol lg="6" sm="12">
              <CFormGroup>
              <CLabel htmlFor="phone">Phone</CLabel>
              <CInput className="form-control-success" id="phone" />
              <CInvalidFeedback className="help-block">
                Please provide a valid information
              </CInvalidFeedback>
              <CValidFeedback className="help-block">Input provided</CValidFeedback>
            </CFormGroup>
            </CCol>
            <CCol lg="6" sm="12">
              <CFormGroup>
                <CLabel htmlFor="admissionNumber">Admission Number</CLabel>
                <CInput className="form-control-warning" id="admissionNumber" required />
                <CInvalidFeedback className="help-block">
                  Please provide a valid information
                </CInvalidFeedback>
                <CValidFeedback className="help-block">Input provided</CValidFeedback>
              </CFormGroup>
            </CCol>
          </CRow>

          <CRow className="my-0">
            <CCol lg="6" sm="12">
              <CFormGroup>
              <CLabel htmlFor="email">Email</CLabel>
              <CInput className="form-control-success" id="email" type="email" />
              <CInvalidFeedback className="help-block">
                Please provide a valid information
              </CInvalidFeedback>
              <CValidFeedback className="help-block">Input provided</CValidFeedback>
              </CFormGroup>
            </CCol>
            <CCol lg="6" sm="12">
              <CFormGroup>
                <CLabel>Image</CLabel>
                <CCol xs="12">
                  <CInputFile custom id="custom-file-input"/>
                  <CLabel htmlFor="custom-file-input" variant="custom-file">
                    Choose file...
                  </CLabel>
                </CCol>
              </CFormGroup>
            </CCol>
          </CRow>

          <h4 className="mt-3">Parent Information</h4>
          <CRow className="my-0">
            <CCol lg="6" sm="12">
              <CLabel htmlFor="parentName">Parent First Name</CLabel>
              <CInput className="form-control-success" id="parentName" />
              <CInvalidFeedback className="help-block">
                Please provide a valid information
              </CInvalidFeedback>
              <CValidFeedback className="help-block">Input provided</CValidFeedback>
            </CCol>
            <CCol lg="6" sm="12">
              <CFormGroup>
                <CLabel htmlFor="parentAddress">Parent Address</CLabel>
                <CInput className="form-control-warning" id="parentAddress" required />
                <CInvalidFeedback className="help-block">
                  Please provide a valid information
                </CInvalidFeedback>
                <CValidFeedback className="help-block">Input provided</CValidFeedback>
              </CFormGroup>
            </CCol>
          </CRow>

          <CRow className="my-0">
            <CCol lg="6" sm="12">
              <CLabel htmlFor="parentEmail">Parent Email</CLabel>
              <CInput className="form-control-success" type="email" id="parentEmail" />
              <CInvalidFeedback className="help-block">
                Please provide a valid information
              </CInvalidFeedback>
              <CValidFeedback className="help-block">Input provided</CValidFeedback>
            </CCol>
            <CCol lg="6" sm="12">
              <CFormGroup>
                <CLabel htmlFor="parentPhone">Phone</CLabel>
                <CInput className="form-control-warning" type="number" id="parentPhone" required />
                <CInvalidFeedback className="help-block">
                  Please provide a valid information
                </CInvalidFeedback>
                <CValidFeedback className="help-block">Input provided</CValidFeedback>
              </CFormGroup>
            </CCol>
          </CRow>

        </CCardBody>
        <CCardFooter>
          <CButton type="submit" size="sm" color="primary" className="mr-1"><CIcon name="cil-scrubber" /> Submit</CButton>
          <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
        </CCardFooter>
      </CForm>
      </CCard>
    </CCol>
  );
};

export default AddStudents;

