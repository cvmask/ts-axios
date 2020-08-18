export type Method = | 'get'  | 'GET'  | 'put'  | 'PUT'  | 'post'  | 'POST'  | 'delete'  | 'DELETE'  | 'options'  | 'OPTIONS'  | head'  | 'HEAD'  | 'patch'  | 'PATCH';

export interface AxiosRequestConfig {
  url: string
  method?: string
  data?: string
  params?: string
}
