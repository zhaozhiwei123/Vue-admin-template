import request from '@/utils/request'
export function common (params) {
  return request({
    url: '/learning/v1/admin/course',
    method: 'post',
    data: params
  })
}
