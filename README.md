# e2e code-coverage

The application code is "instrumented" via istanbul if `NODE_ENV=test`. As a result, a `__coverage__` object appears in `window` after execution (during the test).
After completing tests, it remains to read this variable and generate a report. Cypress does this after a simple setup (see last commits).
If you run all tests (components, e2e) via Cypress, reports merges automatically.

# How to see the e2e test-coverage

Start instrumented front-end version:

```
npm run start:instrumented
```

Run e2e tests:

```
npm run test:e2e:ci
```

See ./coverage/lcov-report/index.html generated

# How to see the components test-coverage

Run component tests:

```
npm run test:components:ci
```

See ./coverage/lcov-report/index.html generated

# How to see e2e + components test-coverage

Start instrumented front-end version:

```
npm run start:instrumented
```

Run all tests:

```
npm run test:all
```

See ./coverage/lcov-report/index.html generated
