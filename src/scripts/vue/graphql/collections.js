
// Storefront
const key = `c414a1ee519eaf11568e1c11ee0992b2`
const resource = `https://ian-springers-personal-store.myshopify.com/api/2019-07/graphql`

// Admin
// const key = `6ab097bf300698464598157f0cb0a31a`
// const resource = `https://ian-springers-personal-store.myshopify.com/admin/api/2019-07/graphql.json`

export const fetchCollectionData = (handle, limit = 250) =>  {
  return new Promise((resolve, reject) => {
  	const query = `
  	    {
          collectionByHandle(handle: "${handle}") {
            products(first: ${limit}) {
              edges {
                node {
                  id
                  title
                  handle
                  description
                  createdAt
                  tags
                  variants(first: 1) {
                    edges {
                      node {
                        title
                        image {
                          src
                        }
                        price
                      }
                    }
                  }
                }
              }
            }
          }
  	    }
  	   `

      fetch(resource, {
        method: 'POST',
        body: query,
        headers: {
          'Content-Type': 'application/graphql',
          // 'Access-Control-Allow-Origin':
          'Accept': 'application/json',
          "X-Shopify-Storefront-Access-Token": key
        }
      })
      .then(res => res.json())
      .then(res => resolve(res))
      .catch(error => reject(error))
    
  })
}


