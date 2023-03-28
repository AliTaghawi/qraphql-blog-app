import { gql } from '@apollo/client'

const GET_POSTS = gql`
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

export { GET_POSTS, }