import React, { useEffect } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { FormWrapper, StyledForm } from "../../../hoc/layout/elements/index";

import Message from "../../UI/Message/Message";
import Input from "../../UI/Forms/Input/Input";
import Button from "../../UI/Forms/Button/Button";
import Heading from "../../UI/Headings/Heading";

import { connect } from "react-redux";
import * as actions from "../../../store/actions";

const LoginSchema = Yup.object().shape({
  firstName: Yup.string().min(3, "lalal").max(15, "First Name is too long"),
  lastName: Yup.string().min(3, "lalal").max(15, "Last Name is too long"),
  email: Yup.string()
    .email("Invalid email.")
    .required("The email is required."),
  password: Yup.string()
    .required("The passoword is required.")
    .min(8, "password is too short"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], `Password does not match`)
    .required("The password fields must be the same"),
});

const Signup = ({ signUp, loading, errorMessage, cleanUp }) => {
  useEffect(() => {
    cleanUp();
  }, []);

  return (
    <div style={{ padding: "3rem" }}>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={async (values, { setSubmitting }) => {
          await signUp(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, isValid }) => (
          <FormWrapper>
            <Heading size="h2" color="gray">
              Sign Up
            </Heading>
            <StyledForm>
              <Field
                name="firstName"
                type="text"
                placeholder="Your first name..."
                component={Input}
              />
              <Field
                name="lastName"
                type="text"
                placeholder="Your last name..."
                component={Input}
              />
              <Field
                name="email"
                type="email"
                placeholder="Your email..."
                component={Input}
              />
              <Field
                name="password"
                type="password"
                placeholder="Your password..."
                component={Input}
              />
              <Field
                name="confirmPassword"
                type="password"
                placeholder="Repeat your password please..."
                component={Input}
              />
              <Button
                disabled={!isValid || isSubmitting}
                type="submit"
                loading={loading ? "Signing Up is in process..." : null}
              >
                Submit
              </Button>
              <Message error show={errorMessage}>
                {errorMessage}
              </Message>
            </StyledForm>
          </FormWrapper>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.loading,
  errorMessage: auth.errorMessage,
});

const mapDispatchToProps = {
  signUp: actions.signUp,
  cleanUp: actions.cleanUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
