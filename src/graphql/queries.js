import { gql } from '@apollo/client'

const GET_POSTS_INFO = gql`
  query {
    posts {
      author {
        name
        avatar {
          url
        }
      }
      id
      slug
      title
      coverImage {
        url
      }
    }
  }
`

const GET_AUTHORS_INFO = gql`
  query {
    authors {
      id
      name
      slug
      avatar {
        url
      }
    }
  }
`

export { GET_POSTS_INFO, GET_AUTHORS_INFO, }