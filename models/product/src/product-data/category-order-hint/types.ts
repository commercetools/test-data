import type { CategoryOrderHints } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import type { TCtpCategoryOrderHint } from '@commercetools-test-data/graphql-types';

// The rest representation is a key-value pair of categoryId and orderHint
export type TCategoryOrderHintRest = CategoryOrderHints;
export type TCategoryOrderHintGraphql = TCtpCategoryOrderHint;

export type TCreateCategoryOrderHintBuilder<
  TCategoryOrderHintModel extends
    | TCategoryOrderHintRest
    | TCategoryOrderHintGraphql,
> = () => TBuilder<TCategoryOrderHintModel>;
