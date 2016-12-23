var React = require('react');

module.exports = React.createClass({
	initialize: function(node) {
		if (!node) return;

		var App = this.props.src;

		this._instance = new App({
		  target: node,
		  data: this.props,
		});
	},

	componentWillUnmount: function() {
		this._instance.teardown();
	},

	componentWillReceiveProps(nextProps) {
		this._instance.set(nextProps);
	},

	shouldComponentUpdate: function() {
		return false;
	},

	render: function () {
		return React.createElement('div', { ref: this.initialize });
	}
});
