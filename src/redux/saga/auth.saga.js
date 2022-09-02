import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { loginUser, logoutUser, newUser } from '../../APIs/userAPI.saga';
import { loggedinAction, loggedoutAction } from '../action/auth.action';
import * as ActionType from '../ActionTypes'


function* signUpSaga(action) {
   try {
      const user = yield call(newUser, action.payload);
      console.log("msg",user);
      
      
   } catch (e) {
      console.log("error", e);
   }
}
function* logInSaga(action) {
   try {
      const user = yield call(loginUser, action.payload);
      yield put(loggedinAction(user))
      console.log("msg",user);
   } catch (e) {
      console.log("error", e);
   }
}

function* logOutSaga() {
   try {
      const user = yield call(logoutUser);
      yield put(loggedoutAction(user))
      console.log("msg",user);
   } catch (e) {
      console.log("error", e);
   }
}


function* watchsignUp() {
  yield takeEvery(ActionType.SIGNUP_USER, signUpSaga);
}
function* watchLogin() {
  yield takeEvery(ActionType.LOGIN_USER, logInSaga);
}
function* watchLogout() {
  yield takeEvery(ActionType.LOGOUT_USER, logOutSaga);
}

export function* watchAuth() {
  yield all([watchsignUp(), watchLogin(), watchLogout()]);
}
