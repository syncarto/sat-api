const api = require('./libs/api')
const backend = require('./libs/es')

const sentinelQueryParams = {
  limit: 100,
  query: {
    collection: {
      eq: 'sentinel-2-l1c'
    },
    'sentinel:utm_zone': {
      eq: 38
    },
    'sentinel:latitude_band': {
      gte: 'V',
      lte: 'X'
    },
    'sentinel:grid_square': {
      eq: 'NM'
    }
  },
  latestFilter: {
    footprintProperties: ['sentinel:utm_zone', 'sentinel:latitude_band', 'sentinel:grid_square']
  },
  time: '2019-05-09T00:00:00Z/2019-05-16T00:00:00Z'
}

const landsatQueryParams = {
  limit: 100,
  query: {
    collection: {
      eq: 'landsat-8-l1'
    },
    'eo:row': {
      eq: '042'
    },
    'eo:column': {
      eq: '150'
    }
  },
  latestFilter: {
    footprintProperties: ['eo:row', 'eo:column']
  },
  time: '2019-05-09T00:00:00Z/2019-05-16T00:00:00Z'
}

const go = async (queryParams) => {
  const results = await api.search('/stac/search', queryParams, backend, 'endpoint')
  // console.log(results)
  results.features.forEach((result) => {
    console.log(result.id, result.bbox, result.properties)
  })
}

// go(sentinelQueryParams)
// go(landsatQueryParams)
sentinelQueryParams.latestFilter = undefined
landsatQueryParams.latestFilter = undefined
go(sentinelQueryParams)
go(landsatQueryParams)
