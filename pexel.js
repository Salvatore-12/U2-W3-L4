const getApi = function () {
     fetch("https://api.pexels.com/v1/search?query=dogs",{
     headers:{
     authorization:"lDoizMfYnFY5XcwS5o0JlOpTwRACTkilzf7dJZOqiQZAtmDxIHRh3lWZ"
     }
    })
      .then((res) => {
        console.log('Response ottenuta dalla GET', res)
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('Errore nel contattare il server')
        }
      })
      .then((dogs) => {
        console.log('EVENTS',dogs)
        getApi(dogs)
    })


      .catch((err) => {
        console.log('Si è verificato un errore:',err)})
    }
    
   
   
    // Bottone1
   const bottonLoading=document.getElementById("bottonLoad")
   bottonLoading.addEventListener("click",function(e){
   e.preventDefault()
   fetch("https://api.pexels.com/v1/search?query=dogs",{
     headers:{
     authorization:"lDoizMfYnFY5XcwS5o0JlOpTwRACTkilzf7dJZOqiQZAtmDxIHRh3lWZ"
     }
    })
      .then((res) => {
        if (res.ok){
         console.log(res)
        } else {
          throw new Error('Errore nel contattare il server')
        }
      })
 })
const bottonLoading2=document.getElementById("bottonLoad2")
bottonLoading2.addEventListener("click",function(e){
    e.preventDefault()
    fetch("https://api.pexels.com/v1/search?query=cats",{headers:{authorization:"lDoizMfYnFY5XcwS5o0JlOpTwRACTkilzf7dJZOqiQZAtmDxIHRh3lWZ"}})
})
.then((res) => {
    if (res.ok){
     console.log(res)
    } else {
      throw new Error('Errore nel contattare il server')
    }
  })

