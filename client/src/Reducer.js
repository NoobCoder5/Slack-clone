const Reducer = (state = null,action) => {
  switch (action.type) {
      case "GET" :
          return action.payload
     default: return state
  }
}

export default Reducer