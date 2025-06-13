import type { TBuilder } from '@/core';
import { TCtpRawCustomField } from '@/graphql-types';

// value is typed as JSON while it accepts any of the field types
export type TRawCustomFielGraphql = Omit<TCtpRawCustomField, 'value'> & {
  value: unknown;
};

export type TRawCustomFieldBuilder = TBuilder<TRawCustomFielGraphql>;
export type TCreateRawCustomFieldBuilder = () => TRawCustomFieldBuilder;
