import React from "react";

export class Counter extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			intervaldID: null,
			// counter: 0,
		};
		// this.resetCount = this.resetCount.bind(this);
		//   console.log('constructor(): props:', props);

	}

	// resetCount() {
	// 	this.props.onCounterReset();

	// 	this.setState({
	// 		counter: 0
	// 	});
	// }

	// static getDerivedStateFromProps(props, state) {
	// 	//   console.log('getDerivedStateFromProps(): props:', props, ', state:', state);
	// 	//   console.log('getDerivedStateFromProps(): props:', props, ', state:', state);
	// 	return null;
	// }

	// shouldComponentUpdate(nextProps, nextState) {
	// 	  console.log('getDerivedStateFromProps(): nextProps:', nextProps, ', nextState:', nextState);
	// 	  console.log('getDerivedStateFromProps(): this.props:', this.props, ', this.state:', this.state);
	// 	return true;
	// }

	// getSnapshotBeforeUpdate(prevProps, prevState) {
	// 	//   console.log('getDerivedStateFromProps(): prevProps:', prevProps, ', prevState:', prevState );
	// 	//   console.log('getDerivedStateFromProps(): this.props:', this.props, ', this.state:', this.state);
	// }

	componentDidMount() {
		const intervalID = setInterval(() => {
			this.props.onCounterTick();
			// this.setState({ counter: this.state.counter + 1 });
		}, 2000);

		this.setState({ intervaldID: intervalID });

		//   console.log('componentDidMount(): this.props:', this.props, ', this.state:', this.state);
	}

	componentWillUnmount() {
		clearInterval(this.state.intervaldID);
		//   console.log('componentWillUnmount(): this.props:', this.props, ', this.state:', this.state);
	}

	render() {
		//   console.log('render(): this.props:', this.props, ', this.state:', this.state);
		return <>
			<h1>Counter</h1>
			<hr />
			<h2>counter: {this.props.counter}</h2>
			{/* <button onClick={this.props.onCounterReset}>Reset count</button> */}
			<Reset onCounterReset={this.props.onCounterReset} />
		</>
	}

	// static getDerivedStateFromError(error, info) {
	// 	//   console.log('render(): error:', error, ', info:', info);
	// 	return {};
	// }

	// componentDidCatch(error, info) {
	// 	// console.log('render(): error:', error, ', info:', info);
	// }
}

export class Parent extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			// intervaldID: null,
			counter: 0,
		};

		this.handleCounterTick = this.handleCounterTick.bind(this);
		this.handleReset = this.handleReset.bind(this);
	}

	render() {
		return <>
			<Counter counter={this.state.counter} onCounterTick={this.handleCounterTick} onCounterReset={this.handleReset} />
		</>
	}

	handleCounterTick() {
		this.setState({ counter: this.state.counter + 1 });
	}

	handleReset() {
		console.log("handleReset from parent");
		this.setState({ counter: 0 });
	}
}

function Reset(props) {
	return <button onClick={props.onCounterReset}>Reset</button>
}