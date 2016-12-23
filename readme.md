# Write React components in Svelte

This package makes it easy to turn Svelte code into React components.

Companies that use [Svelte](https://svelte.technology/) in production usually start with a single component. So if you want to use Svelte at work, start with a small experiment. Do people think it is nice? Do more! Do people think it sucks? Do less!

## Example

  - TodoMVC &mdash; [Demo](http://jihchi.github.io/react-svelte-components) / [Code](example)


## Usage

After you have compiled an Svelte program to JavaScript, you can embed it in React like this:

```javascript
import Svelte from 'react-svelte-components'
import { Todo } from '../dist/svelte/todomvc.js'

function render() {
	return <Svelte src={Todo} />
}
```
