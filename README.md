# 🛎️ clean-toasts

A lightweight pure JavaScript toast library with no dependencies.

## Installation:

```bash
npm install clean-toasts
```

## Usage:

```js
import { Notify } from 'clean-toasts';
import 'clear-toasts/dist/toast.css';

Notify.success('Success');
Notify.error('Error');
Notify.warning('Warning');
Notify.info('Info');
```

## Settings:

```js
import { Notify } from 'clean-toasts';

Notify.defaultOptions.duration = 5000;
```

## Supported Types:

- `success`
- `error`
- `warning`
- `info`