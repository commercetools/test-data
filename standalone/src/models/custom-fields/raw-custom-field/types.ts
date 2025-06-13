import type { TBuilder } from '@/core';
import { TCtpRawCustomField } from '@/graphql-types';

export type TRawCustomFielGraphql = Omit<TCtpRawCustomField, 'value'> & {
  value: unknown;
};

export type TRawCustomFieldBuilder = TBuilder<TRawCustomFielGraphql>;
export type TCreateRawCustomFieldBuilder = () => TRawCustomFieldBuilder;
