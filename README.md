# 🛎️ clear-toasts

A lightweight pure JavaScript toast library with no dependencies.

## Installation:

```bash
npm install clear-toasts
```

## Usage:

```js
import { Notify } from 'clear-toasts';
import 'clear-toasts/dist/toast.css';

Notify.success('Sol lucet omnibus');
Notify.error('Qui timide rogat docet negare');
Notify.warning('Memento te hominem esse');
Notify.info('Cogito ergo sum');
```

## Settings:

```js
import { Notify } from 'clear-toasts';

Notify.defaultOptions.duration = 5000;
```

## Supported Types:

- `success`
- `error`
- `warning`
- `info`