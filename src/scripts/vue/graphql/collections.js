const key = `c414a1ee519eaf11568e1c11ee0992b2`
const resource = `https://ian-springers-personal-store.myshopify.com/api/2019-07/graphql`

export const fetchCollectionData = (handle, limit = 250) => {
  return new Promise((resolve, reject) => {
  	const query = `
  	    {
          collectionByHandle(handle: "${handle}") {
            products(first: ${limit}) {
              edges {
                node {
                  id
                  title
                  description
                  tags
                }
              }
            }
          }
  	    }
  	   `

      fetch('https://ian-springers-personal-store.myshopify.com/api/graphql', {
        method: 'POST',
        body: query,
        headers: {
          'Content-Type': 'application/graphql',
          'Accept': 'application/json',
          "X-Shopify-Storefront-Access-Token": key
        }
      })
      .then(res => res.json())
      .then(res => resolve(res))
      .catch(error => reject(error))
    
  })
}


