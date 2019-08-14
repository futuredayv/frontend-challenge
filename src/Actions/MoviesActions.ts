import { ActionConsts } from "@Definitions";

/**
 * ACTIONS
*/
export const MoviesActions = {
	Map: (payload: any) => (
		{
			payload,
			type: ActionConsts.Movies.SetReducer
		}
	),

	Reset: () => ({
		type: ActionConsts.Movies.ResetReducer
	})
}