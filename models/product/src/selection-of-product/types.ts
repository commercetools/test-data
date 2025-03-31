import type { TBuilder } from '@commercetools-test-data/core';
import { TCtpSelectionOfProduct } from '@commercetools-test-data/graphql-types';

// This model does not have a REST equivalent on purpose as it
// only exists in the GraphQL API
export type TSelectionOfProductGraphql = TCtpSelectionOfProduct;

export type TCreateSelectionOfProductBuilder =
  () => TBuilder<TSelectionOfProductGraphql>;
