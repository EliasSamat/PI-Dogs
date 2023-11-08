
  
  const cardInitialState = {
    cardId: 1, // Estado inicial del id
  };
  
  const cardReducer = (state = cardInitialState, action) => {
    switch (action.type) {
      case 'GUARDAR_ID':
        return {
          ...state,
          cardId: action.payload, // Actualiza el campo del id
        };
      default:
        return {...state};
    }
  };
  
  export default  cardReducer ;
  