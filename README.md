
# Integrating Bit into Your NX Monorepo
Learn how to integrate Bit into a Nx Monorepo, exploring tips and tricks. 

**Note:** The code for the original NX monorepo example is taken from the official [nx-recipes/react-monorepo](https://github.com/nrwl/nx-recipes/tree/main/react-monorepo) repository.


## What's inside?

This example contains two React applications and three shared libraries that started from the `react-monorepo` preset. 

```
npx create-nx-workspace@latest myngapp --preset=react-monorepo
```

It contains 

- two React application: `apps/react-store` and `apps/inventory`
- three local libraries: `libs/products`, `libs/orders` and `libs/shared/ui` to demo how to modularize a codebase
- uses [Nx module boundary rules](https://nx.dev/core-features/enforce-project-boundaries) to enforce architectural constraints

Follow through the tutorial linked above for more details.

## How to run it

Clone it locally, install all dependencies using `npm install`. You can then run commands Like

- `npx nx build` to build the React application
- `npx nx serve` to serve the app
- you can use `npx nx graph` to visualize the structure

## Bit Scope
You can find the Bit components created for the demo in [ashanfernando/bit-with-nx](https://bit.cloud/ashanfernando/bit-with-nx) scope in Bit cloud.

