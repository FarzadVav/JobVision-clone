const getToken = () => {
  return document.cookie.split(';').find(c => c.trim().startsWith('jv_token='))?.split('=')[1]
}

export default getToken