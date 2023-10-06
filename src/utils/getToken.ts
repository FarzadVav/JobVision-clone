const getToken = () => {
  return document.cookie.split(';').find(c => c.includes('jv_token'))
}

export default getToken