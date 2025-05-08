import type { TBuilder } from '../../../core';

export type TLimit = {
  limit: number;
};

export type TLimitGraphql = TLimit & {
  __typename: 'Limit';
};

export type TLimitBuilder = TBuilder<TLimit>;
export type TCreateLimitBuilder = () => TLimitBuilder;
