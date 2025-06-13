import type { TBuilder } from '@/core';
import { TCtpRawCustomField } from '@/graphql-types';

export type TRawCustomFielGraphql = TCtpRawCustomField;

export type TRawCustomFieldBuilder = TBuilder<TRawCustomFielGraphql>;
export type TCreateRawCustomFieldBuilder = () => TRawCustomFieldBuilder;
