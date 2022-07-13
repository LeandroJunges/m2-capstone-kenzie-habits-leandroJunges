
export default class EditProfile {

  static baseURL = "https://habits-kenzie.herokuapp.com/api/user/profile"
  static token =  localStorage.getItem("@habits-kenzie:usr_token")

  static async update() {
    const btnUpdate = document.querySelector("#btnsend") 
    const getUrl = document.querySelector("#cImg")
    btnUpdate.addEventListener("click", ()=>{
      
      return getUrl.value
    })

    return await fetch(this.baseURL, {
     
      method: "PATCH",
      headers:{

        "Content-Type" :  "application/json",

        "Authorization" :   `Bearer ${JSON.parse(this.token)}`
      },
      body: {
        "usr_image": JSON.stringify(getUrl.value)
  
      }

    })
    .then(res =>  res.json() )
    .then(res => res)
    .catch(err => console.log(err))
    
  }
}
