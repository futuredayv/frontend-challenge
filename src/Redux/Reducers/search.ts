//#region Local Imports
import { ActionConsts } from '@Definitions';
//#endregion Local Imports

//#region Interface Imports
import { IAction, ISearch } from '@Interfaces';
//#endregion Interface Imports

/**
 * INITIAL_STATE
 */
const INITIAL_STATE: ISearch.IStateProps = {};

type IMapPayload = ISearch.Actions.IMapPayload;

export const SearchReducer = (
	state = INITIAL_STATE,
	action: IAction<IMapPayload>,
) => {
	switch (action.type) {
		case ActionConsts.Search.SetReducer:
			return {
				...state,
				...action.payload,
			};

		case ActionConsts.Search.ResetReducer:
			return INITIAL_STATE;

		default:
			return state;
	}
};
