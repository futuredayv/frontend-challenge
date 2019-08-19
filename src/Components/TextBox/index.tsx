//#region Global Imports
import * as React from 'react';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
//#endregion Global Imports

//#region Local Imports
import './style.scss';
import { SearchIcon } from '../../Assets/icons';
//#endregion Local Imports

//#region Interface Imports
import { ITextBox } from '@Interfaces';
//#endregion Interface Imports

class TextBox extends React.Component<ITextBox.IProps, ITextBox.IState> {
	constructor(props: ITextBox.IProps) {
		super(props);

		this.state = {
			text: '',
		};

		this.inputs$ = new BehaviorSubject<string>('');
	}

	inputs$: BehaviorSubject<string>;

	componentDidMount() {
		const { debounce, minLength, onChange } = this.props;

		this.inputs$.pipe(debounceTime(debounce || 0)).subscribe(text => {
			if ((minLength && text.length >= minLength) || text.length === 0) {
				onChange && onChange(text);
			}
		});
	}

	handleChange = ({
		currentTarget: { value },
	}: React.FormEvent<HTMLInputElement>) => {
		this.setState({ text: value });
		this.inputs$.next(value);
	};

	public render(): JSX.Element {
		return (
			<div className="search__input shadow-radius-box TextBox">
				<input
					type="text"
					name="search-text"
					placeholder="Looking for something specific ?"
					value={this.state.text}
					onChange={this.handleChange}
				/>
				<button type="submit">
					<SearchIcon className="icon" />
				</button>
			</div>
		);
	}
}

export default TextBox;
