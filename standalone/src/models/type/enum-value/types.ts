import type { TBuilder } from '@/core';
import { TCtpEnumValue } from '@/graphql-types';

export type TEnumValue = {
  key: string;
  label: string;
};

export type TEnumValueGraphql = TCtpEnumValue;

export type TEnumValueBuilder = TBuilder<TEnumValue>;
export type TCreateEnumValueBuilder = () => TEnumValueBuilder;
