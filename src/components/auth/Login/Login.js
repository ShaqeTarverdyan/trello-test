import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormWrapper, StyledForm } from "../../../hoc/layout/elements/index";

import Input from "../../UI/Forms/Input/Input";
import Button from "../../UI/Forms/Button/Button";
import Heading from "../../UI/Headings/Heading";
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email.")
    .required("The email is required."),
  password: Yup.string().required("The passoword is required."),
});

const Login = () => {
  return (
    <div style={{ padding: "3rem" }}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
        }}
      >
        {({ isSubmutting, isValid }) => (
          <FormWrapper>
            <Heading size="h2" color="white">
              Log In
            </Heading>
            <StyledForm>
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
              <Button type="submit">Submit</Button>
            </StyledForm>
          </FormWrapper>
        )}
      </Formik>
    </div>
  );
};

export default Login;
