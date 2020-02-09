# Hypert

Hypertext transpiler (early alpha stage, exploratory)


## Install

```sh
yarn add hypert
```


## Use

```ts
import { parse, render } from 'hypert'

const source = '<div>...</div>'
const nodes = parse(source)
const html = render(nodes)
```

## React

Optionally create a React node that renders the HTML.

```ts
import React from 'react'
import ReactDOM from 'react-dom'
import { parse, render } from 'hypert'
import { createReactComponent } from 'hypert/react'

const source = '<div>...</div>'
const nodes = parse(source)
const Component = createReactComponent(nodes)

ReactDOM.render(<Component />, document.getElementById('app'))
```


## Develop this library

Install dependencies

```sh
yarn
```

Develop: Watch files; Recompile, type check and test on changes

```sh
yarn dev
```

Build

```sh
yarn build
```

Publish to NPM

```sh
npm run release
```
