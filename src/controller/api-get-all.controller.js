export default class GetAllRequest {

  static base_url = 'https://habits-kenzie.herokuapp.com/api/habits'

  static async getAll() {
    await fetch(this.base_url, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${JSON.parse(this.token)}`
      },
    })
    .then(res => res.json())
    .then(res => res)
    .catch(err => console.log(err))
  }
}
