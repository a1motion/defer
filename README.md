# defer
Remotely resolve/reject a promise

## Install
```shell
yarn add @a1motion/defer
```

## Usage

```javascript
import defer from "@a1motion/defer";

const promise = defer();
promise.then(() => {
  // do things after
})

// somewhere else
promise.resolve();
```
