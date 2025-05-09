import type { CustomFieldDateType } from '@commercetools/platform-sdk';
import type { TBuilder } from '../../../core';
import { TCtpDateType } from '../../../graphql-types';

export type TCustomFieldDateType = CustomFieldDateType;
export type TCustomFieldDateTypeDraft = CustomFieldDateType;

export type TCustomFieldDateTypeGraphql = TCtpDateType;
export type TCustomFieldDateTypeDraftGraphql = {
  date: {
    dummy: string | null;
  };
};

export type TCustomFieldDateTypeBuilder = TBuilder<TCustomFieldDateType>;
export type TCustomFieldDateTypeDraftBuilder =
  TBuilder<TCustomFieldDateTypeDraft>;

export type TCreateCustomFieldDateTypeBuilder =
  () => TCustomFieldDateTypeBuilder;
export type TCreateCustomFieldDateTypeDraftBuilder =
  () => TCustomFieldDateTypeDraftBuilder;
