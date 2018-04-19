import features from './features'

const sagas = []
features.forEach(feature => {
    if (typeof feature.saga === 'function')
        sagas.push(feature.saga())
})

export default function* rootSaga() {
    yield sagas
}
