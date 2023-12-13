import { CustomFieldLocalizedStringtype } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TCustomFieldLocalizedStringtype = CustomFieldLocalizedStringtype;
export type TCustomFieldLocalizedStringtypeDraft =
  CustomFieldLocalizedStringtype;

export type TCustomFieldLocalizedStringtypeGraphql =
  TCustomFieldLocalizedStringtype & {
    __typename: 'LocalizableStringtypeCustomFieldType';
  };

export type TCustomFieldLocalizedStringtypeDraftGraphql = {
  lstringtype: {
    dummy: string | null;
  };
};

export type TCustomFieldLocalizedStringtypeBuilder =
  TBuilder<TCustomFieldLocalizedStringtype>;
export type TCustomFieldLocalizedStringtypeDraftBuilder =
  TBuilder<TCustomFieldLocalizedStringtypeDraft>;

export type TCreateCustomFieldLocalizedStringtypeBuilder =
  () => TCustomFieldLocalizedStringtypeBuilder;
export type TCreateCustomFieldLocalizedStringtypeDraftBuilder =
  () => TCustomFieldLocalizedStringtypeDraftBuilder;
