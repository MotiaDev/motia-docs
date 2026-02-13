---
title: Development Console
description: The visual development environment for building, testing, and debugging Motia apps, powered by iii.
---

When you run your Motia project with `npm run dev`, a development console is available at [`http://localhost:3000`](http://localhost:3000). This console is powered by [iii](https://iii.dev) and provides visual tooling for your Motia workflows.

<Callout type="info">
The development console is provided by iii. For full documentation on console features, visit [iii.dev/docs](https://iii.dev/docs).
</Callout>

## What You Get

- **Flow visualization** -- see your entire backend as an interactive diagram where every Step is a node
- **API endpoint testing** -- test endpoints directly in the browser without Postman or curl
- **Real-time logs** -- watch `logger.info()`, `logger.warn()`, and `logger.error()` calls stream in
- **Tracing** -- follow the execution timeline of every request across Steps
- **State inspector** -- view and edit data stored with `state.set()`
- **Hot reload** -- changes to Step files refresh automatically

## Getting Started

<Tabs items={['npm', 'yarn', 'pnpm']}>
  <Tab value="pnpm">
  ```bash
  pnpm run dev
  ```
  </Tab>
  <Tab value="yarn">
  ```bash
  yarn dev
  ```
  </Tab>
  <Tab value="npm">
  ```bash
  npm run dev
  ```
  </Tab>
</Tabs>

This starts the iii runtime which boots your Motia backend and the development console at `http://localhost:3000`.

---

## Customizing Flow Visualization

You can override how any Step looks in the console by creating a `.tsx` or `.jsx` file next to your Step file. Use built-in components like `QueueNode`, `ApiNode`, and `CronNode`, or build completely custom React components.

[Full guide to customizing flows](/docs/development-guide/customizing-flows)

---

## What's Next?

[Build your first app](/docs/getting-started/build-your-first-motia-app)
[Learn about State](/docs/development-guide/state-management)
[Learn about Streams](/docs/development-guide/streams)
