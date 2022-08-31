import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { loginUser, newUser } from '../../APIs/userAPI.saga';
import * as ActionType from '../ActionTypes'


function* signUpUser(action) {
   try {
      const user = yield call(newUser, action.payload);
      console.log(user);
      // yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
      // yield put({type: "USER_FETCH_FAILED", message: e.message});
      console.log(e);
   }
}
function* logInUser(action) {
   try {
      const user = yield call(loginUser, action.payload);
      console.log(user);
      // yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
      // yield put({type: "USER_FETCH_FAILED", message: e.message});
      console.log(e);
   }
}


function* watchsignUp() {
  yield takeEvery(ActionType.SIGNUP_USER, signUpUser);
}
function* watchLogin() {
  yield takeEvery(ActionType.LOGIN_USER, logInUser);
}

export function* watchAuth() {
  yield all([watchsignUp(), watchLogin()]);
}
