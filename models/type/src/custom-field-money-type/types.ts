import type { CustomFieldMoneyType } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TCustomFieldMoneyType = CustomFieldMoneyType;
export type TCustomFieldMoneyTypeDraft = CustomFieldMoneyType;

export type TCustomFieldMoneyTypeGraphql = CustomFieldMoneyType & {
  __typename: 'MoneyCustomFieldType';
};
export type TCustomFieldMoneyTypeDraftGraphql = {
  money: {
    dummy: string | null;
  };
};

export type TCustomFieldMoneyTypeBuilder = TBuilder<TCustomFieldMoneyType>;
export type TCustomFieldMoneyTypeDraftBuilder =
  TBuilder<TCustomFieldMoneyTypeDraft>;

export type TCreateCustomFieldMoneyTypeBuilder =
  () => TCustomFieldMoneyTypeBuilder;
export type TCreateCustomFieldMoneyTypeDraftBuilder =
  () => TCustomFieldMoneyTypeDraftBuilder;
