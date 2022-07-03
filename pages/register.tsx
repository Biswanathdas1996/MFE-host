import React from "react";
import swal from "sweetalert";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Card, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const VendorSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
});

const Registration = () => {
  const saveData = (value) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(value);

    var requestOptions: any = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://62af1c073bbf46a3521c2bcf.mockapi.io/mock/user",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        localStorage.setItem("userId", result.id);
        swal({
          title: "Registred",
          text: "Registration completed",
          icon: "success",
          dangerMode: true,
        }).then(() => {
          window.location.replace("/");
        });
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <Grid container>
      <Grid item lg={2} md={2} sm={12} xs={12}></Grid>
      <Grid item lg={8} md={8} sm={12} xs={12}>
        <Card>
          <Typography
            style={{ marginLeft: "15px", marginTop: "10px", padding: 3 }}
            component="h1"
            variant="h5"
          >
            Registration
          </Typography>
          <div
            className="p-8 h-full"
            style={{ justifyContent: "center", padding: "20px" }}
          >
            <Formik
              initialValues={{
                name: "",
                username: "",
                password: "",
              }}
              validationSchema={VendorSchema}
              onSubmit={(values, { setSubmitting }) => {
                saveData(values);
                setSubmitting(false);
              }}
            >
              {({ touched, errors, isSubmitting }) => (
                <Form>
                  <div className="form-group" style={{ marginTop: 20 }}>
                    <Field
                      label="Full Name"
                      type="text"
                      name="name"
                      autoComplete="flase"
                      placeholder="Enter full name"
                      className={`form-control text-muted ${
                        touched.name && errors.name ? "is-invalid" : ""
                      }`}
                    />
                  </div>
                  <div className="form-group" style={{ marginTop: 20 }}>
                    <Field
                      label="User Name"
                      type="text"
                      name="username"
                      autoComplete="flase"
                      placeholder="Enter full username"
                      className={`form-control text-muted ${
                        touched.username && errors.username ? "is-invalid" : ""
                      }`}
                    />
                  </div>
                  <div className="form-group" style={{ marginTop: 20 }}>
                    <Field
                      label="Password"
                      type="password"
                      name="password"
                      autoComplete="flase"
                      placeholder="Enter full password"
                      className={`form-control text-muted ${
                        touched.password && errors.password ? "is-invalid" : ""
                      }`}
                    />
                  </div>

                  <span className="input-group-btn">
                    <Button
                      type="submit"
                      variant="contained"
                      style={{ marginTop: 20 }}
                    >
                      Sign Up
                    </Button>
                  </span>
                </Form>
              )}
            </Formik>
          </div>
        </Card>
      </Grid>
      <Grid item lg={2} md={2} sm={12} xs={12}></Grid>
    </Grid>
  );
};
export default Registration;
