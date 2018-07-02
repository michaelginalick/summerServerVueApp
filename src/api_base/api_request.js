
const baseHost = "http://localhost:8000/"

async function makeRequest(path, options) {

  let newPath = `${baseHost}${path}`

  const response = await fetch(newPath, options)
  const json = response.json()

  if (response.ok) {
    return Promise.resolve(json)
  } else {
    throw new Error(json.message || response.statusText)
  }
  
}


export function apiGet(path, options) {
  return makeRequest(path, buildOptions(options))
}


function buildOptions(options = {}) {
  const requestOptions = {
    method: options.method || "GET",
    headers: {
      "Accept": "applicatin/json"
    }
  }

  if (options.body) {
    requestOptions.body = JSON.stringify(options.body)
  }

  return requestOptions
}
