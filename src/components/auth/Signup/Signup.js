import React from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { FormWrapper, StyledForm } from "../../../hoc/layout/elements/index";

import Input from "../../UI/Forms/Input/Input";
import Button from "../../UI/Forms/Button/Button";
import Heading from "../../UI/Headings/Heading";
const LoginSchema = Yup.object().shape({
  firstName: Yup.string().min(3, "lalal").max(15, "blblbl"),
  lastName: Yup.string().min(3, "lalal").max(15, "blblbl"),
  email: Yup.string()
    .email("Invalid email.")
    .required("The email is required."),
  password: Yup.string().required("The passoword is required."),
});

const Signup = () => {
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
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
        }}
      >
        {({ isSubmutting, isValid }) => (
          <FormWrapper>
            <Heading size="h2" color="white">
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
                name="firstName"
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
              <Button type="submit">Submit</Button>
            </StyledForm>
          </FormWrapper>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
