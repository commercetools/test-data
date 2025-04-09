import type { TBuilder } from '@commercetools-test-data/core';
import { TCtpEnumValue } from '../../../../graphql-types/src';

export type TEnumValue = {
  key: string;
  label: string;
};

export type TEnumValueGraphql = TCtpEnumValue;

export type TEnumValueBuilder = TBuilder<TEnumValue>;
export type TCreateEnumValueBuilder = () => TEnumValueBuilder;
