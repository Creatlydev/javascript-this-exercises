import exercises from "./js/exercises.js";
import './js/copyEvents.js'


function createExercise(exerciseObject) {
    const exerciseTemplate = document.getElementById('exercise-template').content.cloneNode(true)


    let details = exerciseTemplate.querySelector('.exercise')
    let title = exerciseTemplate.querySelector('.exercise__title')
    let pre = exerciseTemplate.querySelector('.exercise__code')
    let code = exerciseTemplate.querySelector('code')
    let button = exerciseTemplate.querySelector('button')
    let answer = exerciseTemplate.querySelector('.exercise__answer')
    let explanation = exerciseTemplate.querySelector('.exercise__explanation')

    title.innerHTML = exerciseObject.title
    code.innerHTML = exerciseObject.code
    code.appendChild(button)
    title.appendChild(pre)
    answer.innerHTML = exerciseObject.answer
    explanation.innerHTML = exerciseObject.explanation

    exercisesContainer.appendChild(details)
}

const exercisesContainer = document.getElementById('exercises-container')

exercises.forEach((exercise) => {
    createExercise(exercise)
})