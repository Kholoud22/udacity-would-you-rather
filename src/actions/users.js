import { RECEIVE_USERS, USER_ADDED_QUESTION, USER_ANSWERED_QUESTION } from '.'

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    data: { users },
  }
}

export function userAddedQuestion({ authedUser, qid }) {
  return { type: USER_ADDED_QUESTION, data: { authedUser, qid } }
}

export function userAnsweredQuestion({ authedUser, qid, answer }) {
  return { type: USER_ANSWERED_QUESTION, data: { answer, qid, authedUser } }
}
