import type { TBuilder } from '../../../core';
import { TCtpSelectionOfProduct } from '../../../graphql-types';

// This model does not have a REST equivalent on purpose as it
// only exists in the GraphQL API
export type TSelectionOfProductGraphql = TCtpSelectionOfProduct;

export type TCreateSelectionOfProductBuilder =
  () => TBuilder<TSelectionOfProductGraphql>;
