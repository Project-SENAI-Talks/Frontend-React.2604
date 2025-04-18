const fetchUser   = async () => {
    const url = "http://localhost:8080/api/v1/users"

    try {

        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });

        if (!response.ok) {
            throw new Error("Erro ao buscar usuários");
        }

        const data = await response.json();
        return data;


    } catch (error) {
    console.error("Erro na solicitação:", error.message);
    throw error;
  }
}

export { fetchUser };