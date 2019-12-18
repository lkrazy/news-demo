import axios from 'axios'
import qs from 'qs'

const apiSender = axios.create({
  baseURL: '/api',
  headers: {
    post: {
      'Content-Type': 'application/json'
    }
  }
})
apiSender.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  config.headers.common.Authorization = token
  return config
})

class ServiceBase {
  baseUri = ''

  buildUri(subUri, query) {
    return `${this.baseUri}/${subUri}?${qs.stringify(query)}`
  }

  get({ subUri, query }) {
    return apiSender.get(this.buildUri(subUri, query))
  }

  post({ subUri, query, body }) {
    return apiSender.post(this.buildUri(subUri, query), body)
  }

  put({ subUri, query, body }) {
    return apiSender.put(this.buildUri(subUri, query), body)
  }

  delete({ subUri, query }) {
    return apiSender.delete(this.buildUri(subUri, query))
  }
}

export default ServiceBase
