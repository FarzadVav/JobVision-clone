const getToken = () => {
  return document.cookie.split(';').find(c => c.trim().startsWith('jv_token='))
}

export default getToken