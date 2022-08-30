import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { newUser } from '../../APIs/userAPI.saga';
import * as ActionType from '../ActionTypes'


function* signUpUser(action) {
   try {
      const user = yield call(newUser, action.payload);
      yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}


function* watchsignUp() {
  yield takeEvery(ActionType.SIGNUP_USER, signUpUser);
}

export function* watchAuth() {
  yield all([watchsignUp()]);
}
