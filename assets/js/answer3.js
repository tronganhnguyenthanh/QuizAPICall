let baseUrl = "https://api.sampleapis.com"
let endpoint = "jokes/goodJokes"
async function getQuestionThree(){
 let res = await fetch(`${baseUrl}/${endpoint}`)
 let question3 = await res?.json()
 localStorage.setItem("question2", JSON.stringify(question3[2]?.punchline?.replace(/\.$/, "")))
 let list = "<ul>"
  list += `<li class="text-right">
    <h4 class="text-info">${question3[2]?.setup}</h4>
  </li>`
 list += "</ul>"
 document.querySelector("#questionThree").innerHTML = list
}
getQuestionThree()

function checkAnswer3(){
  let answer_input = document.querySelector("#qt3").value
  let original_answer = JSON.parse(localStorage.getItem("question2"))
  if(answer_input === ""){
   alert("Please enter your answer")
   return;
  }
  if(answer_input.toLowerCase() == original_answer?.toLowerCase()){
   document.querySelector("#result3").innerHTML = `<h1 class="text-success text-right">That's right</h1>`
   setTimeout(function(){
    window.location.href = "question4.html"
   },1000)
  }else{
    document.querySelector("#result3").innerHTML = `<h3 class="text-danger text-right text-nowrap">
     No. You wrong. Please try again
    </h3>
    `
  }
}