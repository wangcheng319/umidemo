export default {
    namespace: 's_modal',
    state: {
    },
    reducers: {
        sets(state, { payload: params }){
            return { ...state, ...params}
        },
    },
    effects: {
    },
    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(location => {
            });
        },
    },
};