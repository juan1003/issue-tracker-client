const API_URL = "http://localhost:8000/user"

const login = async (username, password) => {
    const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username, 
            password
          })
      }
  
      return (await fetch(`${API_URL}/login`, options)).json()
}

const register = async (firstName, lastName, username, password) => {
    const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
            firstName, 
            lastName, 
            username, 
            password
          })
      }
  
      return (await fetch(`${API_URL}/register`, options)).json()
}

module.exports = {
    login,
    register
}