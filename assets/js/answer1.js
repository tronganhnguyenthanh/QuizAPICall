let baseUrl = "https://api.sampleapis.com"
let endpoint = "jokes/goodJokes"
async function getQuestionOne(){
 let res = await fetch(`${baseUrl}/${endpoint}`)
 let question1 = await res?.json()
 localStorage.setItem("question1", JSON.stringify(question1[0]?.punchline?.replace(/\.$/, "")))
 let list = "<ul>"
  list += `<li class="text-right">
   <h4 class="text-info">${question1[0]?.setup}</h4>
  </li>
  `
 list += "</ul>"
 document.querySelector("#questionOne").innerHTML = list
}
getQuestionOne()

function checkAnswer1(){
  let answer_input = document.querySelector("#qt1").value
  let original_answer = JSON.parse(localStorage.getItem("question1"))
  if(answer_input === ""){
   alert("Please enter your answer")
   return;
  }
  if(answer_input.toLowerCase() == original_answer?.toLowerCase()){
   document.querySelector("#result1").innerHTML = `<h1 class="text-success text-right">That's right</h1>`
   setTimeout(() => {
    window.location.href = "question2.html"
   },1000)
  }else{
    document.querySelector("#result1").innerHTML = `<h3 class="text-danger text-right text-nowrap">
     No. You wrong. Please try again
    </h3>
    `
  }
}