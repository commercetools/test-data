import type { CustomFieldMoneyType } from '@commercetools/platform-sdk';
import type { TBuilder } from '../../../core';
import { TCtpMoneyType } from '../../../graphql-types';

export type TCustomFieldMoneyType = CustomFieldMoneyType;
export type TCustomFieldMoneyTypeDraft = CustomFieldMoneyType;

export type TCustomFieldMoneyTypeGraphql = TCtpMoneyType;
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
