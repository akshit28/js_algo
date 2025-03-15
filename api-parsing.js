const api = 'https://www.algoexpert.io/api/fe/questions'

fetchAndAppend()
async function fetchAndAppend(){
  const questions = await fetchQuestions()
  const questionByCategory = getQuestionsByCategory(questions)
  return questionByCategory;
//    const wrapper = document.getElementByID('wrapper')
    
//   for(const [category, questions] of Object.entries(questionByCategory)){
//     const categoryDiv = createCategory(category, questions)
//     wrapper.append(categoryDiv)
//   }
}

function createCategory(category, questions){

  const categoryDiv = document.createElement('div')
  div.classList.add('category')
  const h2 = document.createElement('h2')
  h2.textContent = category
  
  questions.forEach((question)=>{
    const questionDiv = document.createElement('div')
    questionDiv.classList.add('question')
    const h3 = document.createElement('h3')
    h3.textContent = question.name
    questionDiv.append(h3)
    categoryDiv.append(questionDiv)
  })
}

async function fetchQuestions(){
  const response = await fetch(api)
  const questions = await response.json()
  return questions;
}

function getQuestionsByCategory(questions){
  const questionByCategory = {}
  questions.forEach((question)=>{
    if(questionByCategory.hasOwnProperty(question.category)){
        questionByCategory[question.category].push(question)
    }else{
        questionByCategory[question.category] = [question]
    }
  })
  
  return questionByCategory
}
