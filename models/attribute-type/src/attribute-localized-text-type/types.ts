import { AttributeLocalizableTextType } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TAttributeLocalizedString = AttributeLocalizableTextType;
export type TAttributeLocalizedStringDraft = AttributeLocalizableTextType;

export type TAttributeLocalizedStringGraphql = TAttributeLocalizedString & {
  __typename: 'LocalizableTextAttributeDefinitionType';
};

export type TAttributeLocalizedStringDraftGraphql = {
  dummy: string | null;
};

export type TAttributeLocalizedTextTypeBuilder =
  TBuilder<TAttributeLocalizedString>;
export type TAttributeLocalizedTextTypeDraftBuilder =
  TBuilder<TAttributeLocalizedStringDraft>;

export type TCreateAttributeLocalizedTextTypeBuilder =
  () => TAttributeLocalizedTextTypeBuilder;
export type TCreateAttributeLocalizedTextTypeDraftBuilder =
  () => TAttributeLocalizedTextTypeDraftBuilder;
