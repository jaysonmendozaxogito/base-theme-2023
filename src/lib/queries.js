export const collection = `
  query collectionByHandle(
    $handle: String!
    $productsFirst: Int!
    ) {
    collectionByHandle(handle: $handle) {
      id
      title
      handle
      description
      products(first: $productsFirst) {
        edges {
          cursor
          node {
            id
            title
            tags
            description
            handle
            productType
            options {
              id
              name
            }
            images(first: 1) {
              edges {
                node {
                  src
                  altText
                }
              }
            }
            variants(first: 50) {
              edges {
                node {
                  id
                  title
                  price
                  compareAtPrice
                  availableForSale
                  sku
                  weight
                  selectedOptions {
                    name
                    value
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export const product = `
query productByHandle(
  $handle: String!, $imagesFirst: Int!
  ) {
  productByHandle(handle: $handle) {
    id
    title
    handle
    productType
    description
    options {
      id
      name
    }
    images(first: $imagesFirst) {
      edges {
        node {
          id
          originalSrc
          altText
        }
      }
    }
    variants(first: 250) {
      edges {
        node {
          id
          title
          sku
          weight
          price
          compareAtPrice
          selectedOptions {
            name
            value
          }
        }
      }
    }
  }
}
`

// export const collection = `
//   query collectionByHandle(
//     $handle: String!
//     $first: Int!
//     ) {
//     collectionByHandle(handle: $handle) {
//       products(first: $first) {
//         edges {
//           cursor
//           node {
//             id
//             title
//             description
//             handle
//             images(first: 1) {
//               edges {
//                 node {
//                   src
//                   altText
//                 }
//               }
//             }
//             variants(first: 50) {
//               edges {
//                 node {
//                   id
//                   title
//                   price
//                   compareAtPrice
//                   availableForSale
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `