import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer,
} from './_DATA'

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  )
}

export const saveQuestion = (q) => _saveQuestion(q)

export const saveQuestionAnswer = ({ authedUser, qid, answer }) =>
  _saveQuestionAnswer({ authedUser, qid, answer })
