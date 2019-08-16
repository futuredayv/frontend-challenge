//#region Global Imports
import { Props } from 'prop-types';
//#endregion Global Imports

declare module IDropDown {
    export interface IProps extends Props<{}> {
        items: Array<IDropDownItem>;
        activeClass?: string;
        onChange: (selectedItem: IDropDownItem) => any;
    }
    export interface IState {
        isDroppedDown: boolean;
        selectedItem: IDropDownItem;
    }

    export interface IDropDownItem {
        name: string;
        value: string;
    }

    export interface IStateProps { }

}