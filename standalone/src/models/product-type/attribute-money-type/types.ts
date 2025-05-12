import type { AttributeMoneyType } from '@commercetools/platform-sdk';
import type { TBuilder } from '../../../core';

export type TAttributeMoneyType = AttributeMoneyType;
export type TAttributeMoneyTypeDraft = AttributeMoneyType;

export type TAttributeMoneyTypeGraphql = AttributeMoneyType & {
  __typename: 'MoneyAttributeDefinitionType';
};
export type TAttributeMoneyTypeDraftGraphql = {
  money: {
    dummy: string | null;
  };
};

export type TAttributeMoneyTypeBuilder = TBuilder<TAttributeMoneyType>;
export type TAttributeMoneyTypeDraftBuilder =
  TBuilder<TAttributeMoneyTypeDraft>;

export type TCreateAttributeMoneyTypeBuilder = () => TAttributeMoneyTypeBuilder;
export type TCreateAttributeMoneyTypeDraftBuilder =
  () => TAttributeMoneyTypeDraftBuilder;
