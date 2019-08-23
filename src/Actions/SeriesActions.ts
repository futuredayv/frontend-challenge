import { ActionConsts } from '@Definitions';

/**
 * ACTIONS
 */
export const SeriesActions = {
	Map: (payload: any) => ({
		payload,
		type: ActionConsts.Series.SetReducer,
	}),

	Reset: () => ({
		type: ActionConsts.Series.ResetReducer,
	}),
};
