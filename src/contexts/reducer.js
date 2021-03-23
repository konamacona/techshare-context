

function reducer(state, action) {
	switch(action.type) {
		case 'increment_age': return {...state, user: { ...state.user, age: state.user.age + 1 }}
		default: throw new Error("Unknown action", action)
	}
}

export default reducer