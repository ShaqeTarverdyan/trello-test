const initialState = {
  listName: "shaqe-test",
  cardName: "",
  editCardName: "",
  keyCard: "",
  keyList: "",
  inputKey: "",
  dataLists: [],
  dataCards: [],
  editing: false,
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "TEST_REDUX":
      const name = action.payload;
      return { ...newState, listName: name };
    default:
      return newState;
  }
};

export default reducer;
