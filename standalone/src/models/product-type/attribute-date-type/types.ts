import type { AttributeDateType } from '@commercetools/platform-sdk';
import type { TBuilder } from '../../../core';

export type TAttributeDateType = AttributeDateType;
export type TAttributeDateTypeDraft = AttributeDateType;

export type TAttributeDateTypeGraphql = AttributeDateType & {
  __typename: 'DateAttributeDefinitionType';
};
export type TAttributeDateTypeDraftGraphql = {
  date: {
    dummy: string | null;
  };
};

export type TAttributeDateTypeBuilder = TBuilder<TAttributeDateType>;
export type TAttributeDateTypeDraftBuilder = TBuilder<TAttributeDateTypeDraft>;

export type TCreateAttributeDateTypeBuilder = () => TAttributeDateTypeBuilder;
export type TCreateAttributeDateTypeDraftBuilder =
  () => TAttributeDateTypeDraftBuilder;
