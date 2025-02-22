import exercises from './js/exercises.js'
import './js/copyEvents.js'
import './js/backToTop.js'
import './js/themeToggle.js'

function createExercise (exerciseObject, index) {
  const exerciseTemplate = document.getElementById('exercise-template').content.cloneNode(true)

  const details = exerciseTemplate.querySelector('.exercise')
  const title = exerciseTemplate.querySelector('.exercise__title')
  const pre = exerciseTemplate.querySelector('.exercise__code')
  const code = exerciseTemplate.querySelector('code')
  const button = exerciseTemplate.querySelector('button')
  const answer = exerciseTemplate.querySelector('.exercise__answer')
  const explanation = exerciseTemplate.querySelector('.exercise__explanation')

  title.innerHTML = `${index}. ${exerciseObject.title}`
  code.innerHTML = exerciseObject.code
  code.appendChild(button)
  title.appendChild(pre)
  answer.innerHTML = exerciseObject.answer
  explanation.innerHTML = exerciseObject.explanation

  exercisesContainer.appendChild(details)
}

const exercisesContainer = document.getElementById('exercises-container')

exercises.forEach((exercise, index) => {
  createExercise(exercise, (index + 1).toString().padStart(2, 0))
})
