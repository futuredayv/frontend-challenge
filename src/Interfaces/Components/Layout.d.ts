//#region Global Imports
import { Props } from 'prop-types';
//#endregion Global Imports

declare module ILayout {
    export interface IProps extends Props<{}> {
        title: string;
        children;
    }

}