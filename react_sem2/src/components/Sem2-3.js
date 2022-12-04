import React from "react";

const Child1 = (props) => <h1>Child1</h1>;
const Child2 = (props) => <h1>Child2</h1>;
const Child3 = (props) => <h1>Child3</h1>;

export class Parent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			childNo: 1,
		};
	}

	handleLinkClick(e) {
		setTimeout(() => {
			this.forceUpdate();
		}, 0);
	}

	handleButtonClick(e) {
		let childNo = this.state.childNo > 1 ? 1 : this.state.childNo + 1;

		console.log(childNo);
		this.setState({ childNo: childNo });

		if (window.location.hash === '#child1') {
			window.location.hash = '#child2';
		} else if (window.location.hash === '#child2') {
			window.location.hash = '#child3';
		} else {
			window.location.hash = '#child1';
		}
		this.forceUpdate();
	}

	render() {
		return (
			<div>
				<button onClick={this.handleButtonClick.bind(this)} >Switch</button>

				<hr />

				<a href="#child1" onClick={this.handleLinkClick.bind(this)}>To child1</a>
  				<a href="#child2" onClick={this.handleLinkClick.bind(this)}>To child2</a>
  				<a href="#child3" onClick={this.handleLinkClick.bind(this)}>To child3</a>

				{/* {this.state.childNo === 1 ? <Child1 /> : <Child2 />} */}

				{
					window.location.hash === "#child1"
						? <Child1 />
						: window.location.hash === "#child2"
							? <Child2 />
							: window.location.hash === "#child3" ?
								<Child3 />
								: <div> Not found</div>
				}
			</div>
		);
	}

}