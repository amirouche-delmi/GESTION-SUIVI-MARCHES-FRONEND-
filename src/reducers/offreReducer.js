import {
    GET_OFFRE, 
    RESET_OFFRE_REDUCER,
    UPDATE_OFFRE,
  } from "../actions/offreActions";
  
  const initialState = {};
  
  export default function offreReducer(state = initialState, action) {
    switch (action.type) {
      case GET_OFFRE:
        return action.payload;
      case RESET_OFFRE_REDUCER:
        return initialState;
      case UPDATE_OFFRE:
        return {
          ...state,
          detailsProposition: action.payload.detailsProposition,
          noteConformite: action.payload.noteConformite, 
          noteCout: action.payload.noteCout, 
          noteExperience: action.payload.noteExperience, 
          noteInnovation: action.payload.noteInnovation,
          noteObtenue: action.payload.noteObtenue,
          membresCommission: action.payload.membresCommission,
          resultatEvaluation: action.payload.resultatEvaluation,
          motif: action.payload.motif,
        };  
      default:
        return state;
    }
  }
  