//#region Local Imports
import { ActionConsts } from '@Definitions';
//#endregion Local Imports

//#region Interface Imports
import { IAction, ISeries } from '@Interfaces';
//#endregion Interface Imports

/**
 * INITIAL_STATE
 */
const INITIAL_STATE: ISeries.IStateProps = {};

type IMapPayload = ISeries.Actions.IMapPayload;

export const SeriesReducer = (
	state = INITIAL_STATE,
	action: IAction<IMapPayload>,
) => {
	switch (action.type) {
		case ActionConsts.Series.SetReducer:
			return {
				...state,
				...action.payload,
			};

		case ActionConsts.Series.ResetReducer:
			return INITIAL_STATE;

		default:
			return state;
	}
};
