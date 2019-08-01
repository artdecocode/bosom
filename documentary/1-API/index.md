## API

The package is available by importing its default function:

```js
import bosom from '@rqt/namecheap-web'
```

%~%

```## async bosom => string|void
[
  ["path", "string"],
  ["data=", "Object"],
  ["options=", "Options"]
]
```

The function which can be used for both reading and writing of data. When only a single argument is passed, the read mode is assumed. To write data, it should be passed as the second argument, with an optional config.

`bosom` will read the file when only a path is passed.

%EXAMPLE: example/read, ../src => bosom%
%FORK-js example/read%

When data is passed, `bosom` will write into that file the serialised version of the object. An optional configuration can be passed along to the `JSON.stringify` method.

<typedef narrow>types/index.xml</typedef>

%EXAMPLE: example/write, ../src => bosom%
%FORK-js example/write%

%~%