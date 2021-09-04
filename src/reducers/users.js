import {
  RECEIVE_USERS,
  USER_ADDED_QUESTION,
  USER_ANSWERED_QUESTION,
} from '../actions'

export default function usersReducer(users = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...users,
        ...action.data.users,
      }
    case USER_ADDED_QUESTION:
      const authedUser = action.data.authedUser
      const questionId = action.data.qid
      return {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: [...users[authedUser].questions, questionId],
        },
      }
    case USER_ANSWERED_QUESTION:
      return {
        ...users,
        [action.data.authedUser]: {
          ...users[action.data.authedUser],
          answers: {
            ...users[action.data.authedUser].answers,
            [action.data.qid]: action.data.answer,
          },
        },
      }
    default:
      return users
  }
}
