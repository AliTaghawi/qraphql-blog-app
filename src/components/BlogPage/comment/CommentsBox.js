import React from 'react';

//graphql
import { useQuery } from '@apollo/client';
import { GET_COMMENTS_INFO } from '../../../graphql/queries';

const CommentsBox = ({slug}) => {
  const {loading, data, error} = useQuery(GET_COMMENTS_INFO, {variables: {
    slug,
  }})

  console.log({loading, data, error})
  return (
    <div>
      CommentsBox
    </div>
  );
};

export default CommentsBox;