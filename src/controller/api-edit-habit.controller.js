export default class EditHabit {
  static baseUrl = "https://habits-kenzie.herokuapp.com/api/habits/";
  static token = JSON.parse(localStorage.getItem("@habits-kenzie:usr_token"));

  static async update(idHabit, data) {
    await fetch(`${this.baseUrl}${idHabit}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .catch(err => console.log(err));
  }
}
