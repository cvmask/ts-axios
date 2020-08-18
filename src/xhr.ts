import { AxiosRequestConfig } from './types'

export default function xhr(config: AxiosRequestConfig):void {
  const { data = null, url, method = 'get' } = config
  const xhr = new XMLHttpRequest()
  xhr.open(method.toUpperCase(), url, true)
  xhr.send(data)
}
