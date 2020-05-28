import React, { useEffect } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { FormWrapper, StyledForm } from "../../../hoc/layout/elements/index";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

import Input from "../../UI/Forms/Input/Input";
import Button from "../../UI/Forms/Button/Button";
import Heading from "../../UI/Headings/Heading";
import Message from "../../UI/Message/Message";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email.")
    .required("The email is required."),
  password: Yup.string().required("The passoword is required."),
});

const Login = ({ logIn, loading, errorMessage, cleanUp }) => {
  useEffect(() => {
    cleanUp();
  }, []);
  return (
    <div style={{ padding: "3rem" }}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={async (values, { setSubmitting }) => {
          await logIn(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, isValid }) => (
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
              <Button
                disabled={!isValid || isSubmitting}
                type="submit"
                loading={loading ? "Logging in " : null}
              >
                Login
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
  logIn: actions.signIn,
  cleanUp: actions.cleanUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
