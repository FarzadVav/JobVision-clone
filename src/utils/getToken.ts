export const cookieName = 'jv_token'

const getToken = () => {
  return document.cookie.split(';').find(c => c.trim().startsWith(`${cookieName}=`))?.split('=')[1]
}

export default getToken