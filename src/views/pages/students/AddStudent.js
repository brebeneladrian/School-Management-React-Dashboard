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
  CLabel,
  CValidFeedback,
  CInvalidFeedback,
  CSelect,
  CInputFile,
  CButton,
  CCardFooter,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { useForm } from "react-hook-form";

type FormValues = {
  firstName: string,
  lastName: string,
  studentBadgeID: string,
  gender: string,
  dateOfBirth: string,
  class: string,
  religion: string,
  joiningDate: Date,
  phone: number,
  admissionNumber: number,
  email: string,
  parentName: string,
  parentAddress: string,
  parentPhone: number,
  parentEmail: string,
};

export default function AddStudents() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <CCol xs="12">
        <CCard>
          <CForm
            onSubmit={handleSubmit(onSubmit)}
            validate={(values) => {
              const errors = {};
              if (!values.firstName) {
                errors.firstName = "Required";
              }
              if (!values.lastName && values.firstName === "test") {
                errors.lastName = "Required";
              }
              return errors;
            }}
          >
            <CCardHeader>Add Student</CCardHeader>
            <CCardBody>
              <h4>Student Information</h4>
              <CRow className="my-0">
                <CCol lg="6" sm="12">
                  <CLabel htmlFor="firstName">First Name</CLabel>
                  <CInput
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    ref={register({ required: true })}
                  />
                  <CInvalidFeedback className="help-block">
                    Please provide a valid information
                  </CInvalidFeedback>
                  <CValidFeedback className="help-block">
                    Input provided
                  </CValidFeedback>
                </CCol>
                {/* <CCol lg="6" sm="12">
                  <CFormGroup>
                    <CLabel htmlFor="lastName">Last Name</CLabel>
                    <CInput
                      className="form-control-warning"
                      id="lastName"
                      name="lastName"
                      ref={register({ required: true })}
                    />
                    <CInvalidFeedback className="help-block">
                      Please provide a valid information
                    </CInvalidFeedback>
                    <CValidFeedback className="help-block">
                      Input provided
                    </CValidFeedback>
                  </CFormGroup>
                </CCol> */}
              </CRow>

              {/*  <CRow className="my-0">
                <CCol lg="6" sm="12">
                  <CLabel htmlFor="Student Badge Id">Student Badge Id</CLabel>
                  <CInput
                    className="form-control-success"
                    id="studentBadgeId"
                    name="studentBadgeID"
                    ref={register({ required: true })}
                  />
                  <CInvalidFeedback className="help-block">
                    Please provide a valid information
                  </CInvalidFeedback>
                  <CValidFeedback className="help-block">
                    Input provided
                  </CValidFeedback>
                </CCol>
                <CCol lg="6" sm="12">
                  <CFormGroup>
                    <CLabel htmlFor="gender">Gender</CLabel>
                    <CSelect
                      custom
                      name="gender"
                      id="gender"
                      ref={register({ required: true })}
                    >
                      <option>Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </CSelect>
                    <CInvalidFeedback className="help-block">
                      Please provide a valid information
                    </CInvalidFeedback>
                    <CValidFeedback className="help-block">
                      Input provided
                    </CValidFeedback>
                  </CFormGroup>
                </CCol>
              </CRow>

              <CRow className="my-0">
                <CCol lg="6" sm="12">
                  <CFormGroup>
                    <CLabel htmlFor="dateOfBirth">Date of Birth</CLabel>
                    <CInput
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      placeholder="date"
                      ref={register({ required: true })}
                    />
                    <CInvalidFeedback className="help-block">
                      Please provide a valid information
                    </CInvalidFeedback>
                    <CValidFeedback className="help-block">
                      Input provided
                    </CValidFeedback>
                  </CFormGroup>
                </CCol>
                <CCol lg="6" sm="12">
                  <CFormGroup>
                    <CLabel htmlFor="class">Class</CLabel>
                    <CInput
                      className="form-control-success"
                      id="class"
                      name="class"
                      ref={register({ required: true })}
                    />
                    <CInvalidFeedback className="help-block">
                      Please provide a valid information
                    </CInvalidFeedback>
                    <CValidFeedback className="help-block">
                      Input provided
                    </CValidFeedback>
                  </CFormGroup>
                </CCol>
              </CRow>

              <CRow className="my-0">
                <CCol lg="6" sm="12">
                  <CFormGroup>
                    <CLabel htmlFor="religion">Religion</CLabel>
                    <CInput
                      className="form-control-success"
                      id="religion"
                      name="religion"
                      ref={register({ required: true })}
                    />
                    <CInvalidFeedback className="help-block">
                      Please provide a valid information
                    </CInvalidFeedback>
                    <CValidFeedback className="help-block">
                      Input provided
                    </CValidFeedback>
                  </CFormGroup>
                </CCol>
                <CCol lg="6" sm="12">
                  <CFormGroup>
                    <CLabel htmlFor="joiningDate">Joining Date</CLabel>
                    <CInput
                      type="date"
                      id="joiningDate"
                      name="joiningDate"
                      placeholder="joiningDate"
                      ref={register({ required: true })}
                    />
                    <CInvalidFeedback className="help-block">
                      Please provide a valid information
                    </CInvalidFeedback>
                    <CValidFeedback className="help-block">
                      Input provided
                    </CValidFeedback>
                  </CFormGroup>
                </CCol>
              </CRow>

              <CRow className="my-0">
                <CCol lg="6" sm="12">
                  <CFormGroup>
                    <CLabel htmlFor="phone">Phone</CLabel>
                    <CInput
                      className="form-control-success"
                      id="phone"
                      name="phone"
                      ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                    />
                    <CInvalidFeedback className="help-block">
                      Please provide a valid information
                    </CInvalidFeedback>
                    <CValidFeedback className="help-block">
                      Input provided
                    </CValidFeedback>
                  </CFormGroup>
                </CCol>
                <CCol lg="6" sm="12">
                  <CFormGroup>
                    <CLabel htmlFor="admissionNumber">Admission Number</CLabel>
                    <CInput
                      className="form-control-warning"
                      id="admissionNumber"
                      name="admissionNumber"
                      ref={register({ required: true })}
                    />
                    <CInvalidFeedback className="help-block">
                      Please provide a valid information
                    </CInvalidFeedback>
                    <CValidFeedback className="help-block">
                      Input provided
                    </CValidFeedback>
                  </CFormGroup>
                </CCol>
              </CRow>

              <CRow className="my-0">
                <CCol lg="6" sm="12">
                  <CFormGroup>
                    <CLabel htmlFor="email">Email</CLabel>
                    <CInput
                      className="form-control-success"
                      id="email"
                      type="email"
                      name="email"
                      ref={register({
                        required: true,
                        pattern: /\S+@\S+\.\S+/,
                      })}
                    />
                    <CInvalidFeedback className="help-block">
                      {errors.email?.type === "required" && (
                        <span> This field is required</span>
                      )}
                      {errors.email?.type === "pattern" && (
                        <span> Invalid email</span>
                      )}
                      Please provide a valid information
                    </CInvalidFeedback>
                    <CValidFeedback className="help-block">
                      Input provided
                    </CValidFeedback>
                  </CFormGroup>
                </CCol>
                <CCol lg="6" sm="12">
                  <CFormGroup>
                    <CLabel>Image</CLabel>
                    <CCol xs="12">
                      <CInputFile
                        custom
                        id="custom-file-input"
                        ref={register({ required: true })}
                      />
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
                  <CInput
                    className="form-control-success"
                    id="parentName"
                    name="parentName"
                    ref={register({ required: true })}
                  />
                  <CInvalidFeedback className="help-block">
                    Please provide a valid information
                  </CInvalidFeedback>
                  <CValidFeedback className="help-block">
                    Input provided
                  </CValidFeedback>
                </CCol>
                <CCol lg="6" sm="12">
                  <CFormGroup>
                    <CLabel htmlFor="parentAddress">Parent Address</CLabel>
                    <CInput
                      className="form-control-warning"
                      id="parentAddress"
                      name="parentAddress"
                      ref={register({ required: true })}
                    />
                    <CInvalidFeedback className="help-block">
                      Please provide a valid information
                    </CInvalidFeedback>
                    <CValidFeedback className="help-block">
                      Input provided
                    </CValidFeedback>
                  </CFormGroup>
                </CCol>
              </CRow>

              <CRow className="my-0">
                <CCol lg="6" sm="12">
                  <CLabel htmlFor="parentEmail">Parent Email</CLabel>
                  <CInput
                    className="form-control-success"
                    type="email"
                    id="parentEmail"
                    name="parentEmail"
                    ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })}
                  />
                  <CInvalidFeedback className="help-block">
                    {errors.email?.type === "required" && (
                      <span> This field is required</span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span> Invalid email</span>
                    )}
                  </CInvalidFeedback>
                  <CValidFeedback className="help-block">
                    Input provided
                  </CValidFeedback>
                </CCol>
                <CCol lg="6" sm="12">
                  <CFormGroup>
                    <CLabel htmlFor="parentPhone">Phone</CLabel>
                    <CInput
                      className="form-control-warning"
                      type="number"
                      id="parentPhone"
                      name="parentPhone"
                      ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                    />
                    <CInvalidFeedback className="help-block">
                      Please provide a valid information
                    </CInvalidFeedback>
                    <CValidFeedback className="help-block">
                      Input provided
                    </CValidFeedback>
                  </CFormGroup>
                </CCol>
              </CRow> */}
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="primary" className="mr-1">
                <CIcon name="cil-scrubber" /> Submit
              </CButton>
              <CButton type="reset" size="sm" color="danger">
                <CIcon name="cil-ban" /> Reset
              </CButton>
            </CCardFooter>
          </CForm>
        </CCard>
      </CCol>
    </>
  );
}
