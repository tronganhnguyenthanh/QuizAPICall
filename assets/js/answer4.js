let baseUrl = "https://api.sampleapis.com"
let endpoint = "jokes/goodJokes"
async function getQuestionFour(){
 let res = await fetch(`${baseUrl}/${endpoint}`)
 let question4 = await res?.json()
 localStorage.setItem("question3", JSON.stringify(question4[3]?.punchline?.replace(/\.$/, "")))
 let list = "<ul>"
  list += `<li class="text-right">
    <h4 class="text-info">${question4[3]?.setup}</h4>
  </li>`
 list += "</ul>"
 document.querySelector("#questionFour").innerHTML = list
}
getQuestionFour()

function checkAnswer4(){
  let answer_input = document.querySelector("#qt4").value
  let original_answer = JSON.parse(localStorage.getItem("question3"))
  if(answer_input === ""){
   alert("Please enter your answer")
   return;
  }
  if(answer_input.toLowerCase() == original_answer?.toLowerCase()){
   document.querySelector("#result4").innerHTML = `<h1 class="text-success text-right">That's right</h1>`
   setTimeout(function(){
    window.location.href = "endQuiz.html"
   },1000)
  }else{
    document.querySelector("#result4").innerHTML = `<h3 class="text-danger text-right text-nowrap">
     No. You wrong. Please try again
    </h3>
    `
  }
}