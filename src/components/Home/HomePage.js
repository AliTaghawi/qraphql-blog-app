import { Grid, Typography } from "@mui/material";
import React from "react";

const HomePage = () => {
  return (
    <Grid container mt={3} padding={3}>
      <Grid item xs={12} md={3} mt={4}>
        <Typography component="h2" variant="h4" mb={3} fontWeight={700}>
          نویسندگان
        </Typography>
      </Grid>
      <Grid item xs={12} md={9} mt={4}>
        <Typography component="h2" variant="h4" mb={3} fontWeight={700}>
          وبلاگ‌ها
        </Typography>
      </Grid>
    </Grid>
  );
};

export default HomePage;
