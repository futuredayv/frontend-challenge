//#region Global Imports
import * as React from 'react';
//#endregion Global Imports

//#region Local Imports
import './style.scss';
import { SortIcon } from '../../Assets/icons';
//#endregion Local Imports

//#region Interface Imports
import { IDropDown } from '@Interfaces';
//#endregion Interface Imports

class DropDown extends React.Component<IDropDown.IProps, IDropDown.IState> {
	constructor(props: IDropDown.IProps) {
		super(props);

		this.state = {
			isDroppedDown: false,
			selectedItem: this.props.items[0],
		};
	}

	controlRef = React.createRef<HTMLDivElement>();

	componentDidMount() {
		this.controlRef = React.createRef<HTMLDivElement>();
		document.addEventListener('click', this.handleOutsideClick);
	}

	componentWillUnmount() {
		document.addEventListener('click', this.handleOutsideClick);
	}

	select = (item: IDropDown.IDropDownItem) => {
		this.setState({ selectedItem: item });
		this.props.onChange(item);
	};

	toggleDropDown = () => {
		const { isDroppedDown } = this.state;
		this.setState({ isDroppedDown: !isDroppedDown });
	};

	isDroppedDown = () => (this.state.isDroppedDown ? 'dropped' : '');

	isSelected = (item: IDropDown.IDropDownItem) => {
		const { activeClass } = this.props;
		const { selectedItem } = this.state;

		return item == selectedItem ? activeClass || 'selected' : '';
	};

	handleOutsideClick = ({ target }: MouseEvent) => {
		const { current } = this.controlRef;
		if (current && !current!.contains(target as Node)) {
			this.setState({ isDroppedDown: false });
		}
	};

	renderDropDownList = () => {
		return this.props.items
			.filter(item => this.isSelected(item) === '')
			.map((item, i) => (
				<div
					key={i}
					className={`dropdown__item ${this.isSelected(item)}`}
					onClick={() => this.select(item)}
				>
					{item.name}
				</div>
			));
	};

	public render(): JSX.Element {
		return (
			<div className="search__sort shadow-radius-box DropDown">
				<div
					className={`sort__control ${this.isDroppedDown()}`}
					onClick={this.toggleDropDown}
					ref={this.controlRef}
				>
					<div className="sort__control__selected">
						{this.state.selectedItem.name}
					</div>
					<div className="sort__control__indicator">
						<SortIcon className="icon" />
					</div>

					<div className="sort__control__dropdown shadow-radius-box">
						{this.renderDropDownList()}
					</div>
				</div>
			</div>
		);
	}
}

export default DropDown;
