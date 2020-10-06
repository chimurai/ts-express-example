# Initialize development libraries

```zsh
# tsconfig.json (TypeScript)
yarn tsc --init

# jest.config.js (Jest)
yarn jest --init
```

## tsconfig.json

Disable `esModuleInterop`.

> Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'.

```json
{
      "esModuleInterop": false,
}
```

## jest.config.js

Add `ts-jest` as preset, so you can write TypeScript tests; i.e. `*.spec.ts`

```js
{
  preset: 'ts-jest',
}
```
