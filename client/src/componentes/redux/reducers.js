
  
  const cardInitialState = {
    cardId: 1, // Estado inicial  
  };
 
 

  
  const cardReducer = (state = cardInitialState, action) => {
    switch (action.type) {
      case 'GUARDAR_ID':
        return {
          ...state,
          cardId: action.payload, // Actualiza el campo  
        };
      default:
        return {...state};
    }
  };
  
  export default   cardReducer;
  