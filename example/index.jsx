import React from 'react'
import ReactDOM from 'react-dom'
import Svelte from 'react-svelte-components'
import TodoMVC from './TodoMVC.svelte'

const Example = React.createClass({
  render: function() {
    return (
      <div>
        <Svelte src={TodoMVC} />
      </div>
    );
  }
});

ReactDOM.render(
  <Example />,
  document.querySelector('.todoapp')
);
