import React from "react";
import swal from "sweetalert";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Card, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// const VendorSchema = Yup.object().shape({
//   name: Yup.string().required("Name is required"),
// });

const Registration = () => {
  const saveData = (value) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    console.log("=====>", value);

    var requestOptions: any = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://62af1c073bbf46a3521c2bcf.mockapi.io/mock/user",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        const findUser = result.find(
          (user) =>
            user.username === value.username && user.password === value.password
        );
        if (findUser) {
          localStorage.setItem("userId", findUser.id);
          window.location.replace("/");
        } else {
          swal({
            title: "Warning!",
            text: "Please chek the usename or password",
            icon: "warning",
            dangerMode: true,
          });
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <Grid container>
      <Grid item lg={2} md={2} sm={12} xs={12}></Grid>
      <Grid item lg={8} md={8} sm={12} xs={12}>
        <Card style={{ marginTop: 30 }}>
          <Typography
            style={{ marginLeft: "15px", marginTop: "10px", padding: 3 }}
            component="h1"
            variant="h5"
          >
            Sign in
          </Typography>
          <div
            className="p-8 h-full"
            style={{ justifyContent: "center", padding: "20px" }}
          >
            <Formik
              initialValues={{
                username: "",
                password: "",
              }}
              //   validationSchema={VendorSchema}
              onSubmit={(values, { setSubmitting }) => {
                saveData(values);
                setSubmitting(false);
              }}
            >
              {({ touched, errors, isSubmitting }) => (
                <Form>
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
                      Login
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
