import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { GoogleSignupUser, loginUser, logoutUser, newUser, passwordResetEmailUser } from '../../APIs/userAPI.saga';
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

function* GoogleSignupSaga() {
   try {
      const user = yield call(GoogleSignupUser);
      yield put(loggedinAction(user))
      console.log("msg",user);
   } catch (e) {
      console.log("error", e);
   }
}

function* resetPasswordSaga(action) {
   try {
      const user = yield call(passwordResetEmailUser, action.payload);
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
function* watchGoogleSignup() {
  yield takeEvery(ActionType.GOOGLESIGNUP_USER, GoogleSignupSaga);
}
function* watchresetPassword() {
  yield takeEvery(ActionType.RESET_PASSWORD_USER, resetPasswordSaga);
}

export function* watchAuth() {
  yield all([watchsignUp(), watchLogin(), watchLogout(), watchGoogleSignup(), watchresetPassword()]);
}
