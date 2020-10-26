const API_URL = "http://localhost:8000/issues"

const fetchIssues = async () => {
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }

    return (await fetch(`${API_URL}`, options)).json()
}

module.exports = {
    fetchIssues
}