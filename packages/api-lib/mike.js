const api = require('./libs/api')
const backend = require('./libs/es')

const queryParams = {
  limit: 2,
  query: {
    collection: {
      eq: 'NAIP_LATEST'
    }
  }
}

const go = async () => {
  const results = await api.search('/stac/search', queryParams, backend, 'endpoint')
  // console.log(results)
  results.features.forEach((result) => {
    console.log(result.id, result.bbox)
  })
}

go()

