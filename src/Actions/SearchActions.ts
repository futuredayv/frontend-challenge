import { ActionConsts } from "@Definitions";

/**
 * ACTIONS
*/
export const SearchActions = {
	Map: (payload: any) => (
		{
			payload,
			type: ActionConsts.Search.SetReducer
		}
	),

	Reset: () => ({
		type: ActionConsts.Search.ResetReducer
	}),

	SetSearch: (payload: string) => ({
		payload,
		type: ActionConsts.Search.UpdateFilterOptions,
	})
}
