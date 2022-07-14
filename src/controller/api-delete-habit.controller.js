export default class DeleteHabit {
    static token = JSON.parse(localStorage.getItem("@habits-kenzie:usr_token"))
    static base_url = "https://habits-kenzie.herokuapp.com/api/habits/"
    static async delete(id) {
        // deleta hábito na API
       const result = await fetch(`${this.base_url}${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.token}`
              }
        })
        .then(res => res.json())
        .then(res => {
            window.location.reload(true)
            return res
        })
        .catch(err => console.log(err))

        return result
    }

}