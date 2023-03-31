import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

//MUI
import { Button, Grid, TextField, Typography } from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

//MUI // Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

//formik preparation
const initialValues = {
  name: "",
  email: "",
  text: "",
};

const onSubmit = (values, { resetForm }) => {
  console.log(values)
  resetForm();
};

const validationSchema = Yup.object({
  name: Yup.string().required("ضروری!"),
  email: Yup.string().email("ایمیل نامعتبر است!").required("ضروری!"),
  text: Yup.string().required("ضروری!"),
});

const CommentFrom = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
      <Grid
        container
        sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}
        py={1}
      >
        <Grid item xs={12} m={2}>
          <Typography component="p" variant="h6" color="primary">
            فرم ارسال کامنت
          </Typography>
        </Grid>
        <CacheProvider value={cacheRtl}>
          <Grid item xs={12} m={2}>
            <TextField
              label="نام"
              name="name"
              fullWidth
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              {...(formik.errors.name && formik.touched.name
                ? { helperText: formik.errors.name, error: true }
                : null)}
            />
          </Grid>
          <Grid item xs={12} m={2}>
            <TextField
              label="ایمیل"
              name="email"
              type='email'
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              {...(formik.errors.email && formik.touched.email
                ? { helperText: formik.errors.email, error: true }
                : null)}
            />
          </Grid>
          <Grid item xs={12} m={2}>
            <TextField
              label="متن کامنت"
              name="text"
              multiline
              minRows={4}
              fullWidth
              value={formik.values.text}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              {...(formik.errors.text && formik.touched.text
                ? { helperText: formik.errors.text, error: true }
                : null)}
            />
          </Grid>
          <Grid item xs={12} m={2}>
            <Button type="submit" variant="contained">ارسال</Button>
          </Grid>
        </CacheProvider>
      </Grid>
    </form>
  );
};

export default CommentFrom;
