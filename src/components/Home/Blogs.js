import React from "react";

//graphql
import { useQuery } from "@apollo/client";
import { GET_POSTS_INFO } from "../../graphql/queries";

//MUI
import { Grid } from "@mui/material";

//components
import CardEL from "../common/CardEL";

const Blogs = () => {
  const { loading, data, error } = useQuery(GET_POSTS_INFO);

  if (loading) return <h2>Loading ...</h2>;

  if (error) return <h2>error ...</h2>;

  return (
    <Grid container spacing={2}>
      {data.posts.map((post) => (
        <Grid key={post.id} item xs={12} sm={6} md={4}>
          <CardEL {...post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Blogs;
