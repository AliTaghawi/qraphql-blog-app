import React from 'react';

//MUI
import { Grid, Typography } from '@mui/material';

const CommentFrom = () => {
  return (
    <Grid container sx={{boxShadow: 'rgba(0,0,0,0.1) 0px 4px 12px', borderRadius: 4}} py={1}>
      <Grid item xs={12} m={2}>
        <Typography component='p' variant='h6' color='primary'>فرم ارسال کامنت</Typography>
      </Grid>
    </Grid>
  );
};

export default CommentFrom;