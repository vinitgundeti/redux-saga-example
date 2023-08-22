import { call, put, takeLatest } from 'redux-saga/effects'
import { reduxTypes } from '../utils/constants'
import { homeFetchFailed, homeFetchSucceeded, setHomeLoader } from './productsSlice'
import { API } from '../utils/api'



function* fetchHomeData(action) {
    try {
        yield put(setHomeLoader(true))
        const homeData = yield call(API.product)
        yield put(homeFetchSucceeded(homeData?.data?.products || []))
    }
    catch (e) {
        yield put(homeFetchFailed(e?.message))
    }
}

export default function* mySaga() {
    yield takeLatest(reduxTypes.HOME_DATA_FETCH, fetchHomeData)
}