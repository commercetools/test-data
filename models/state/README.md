# @commercetools-test-data/state

This package provides data models for the commercetools platform `State` representations.

https://docs.commercetools.com/api/projects/states#representations

# Install

```bash
$ pnpm add -D @commercetools-test-data/state
```

# Usage

```ts
import {
  State,
  StateDraft,
  type TState,
  type TStateDraft,
} from '@commercetools-test-data/state';

const state = State.random().build<TState>();
const StateDraft = StateDraft.random().build<TStateDraft>();
```
