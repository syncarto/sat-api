const ingest = require('./libs/ingest')
const backend = require('./libs/es')


const go = async (url) => {
  const results = await ingest.ingest(url, backend)
  console.log(results)
}

// public example
// go('https://syncarto-data-test.s3-us-west-2.amazonaws.com/naip/wi/2017/100cm/rgb/42090/m_4209001_se_15_1_20170922.json')

// requester pays example
go('s3://syncarto-data-rp/stac/naip/wi/2017/100cm/rgb/42090/m_4209001_se_15_1_20170922.json')


/* example of verifying ingest / deleting for re-test:
POST items/_search
{
  "query": {
    "constant_score": {
      "filter": {
        "bool": {
          "must": [
            {
              "term": {
                "id": "42090/m_4209001_se_15_1_20170922"
              }
            }
          ]
        }
      }
    }
  }
}

POST items/_delete_by_query
{
  "query": {
    "match": {
      "id": "42090/m_4209001_se_15_1_20170922"
    }
  }
}
*/
