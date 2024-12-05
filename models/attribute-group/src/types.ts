import type { AttributeGroup } from '@commercetools/platform-sdk';
import { TLocalizedStringGraphql } from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';

export type TAttributeGroup = AttributeGroup;

export type TAttributeGroupGraphql = Omit<
  TAttributeGroup,
  'name' | 'description'
> & {
  name: string;
  nameAllLocales?: TLocalizedStringGraphql | null;
  description?: string | null;
  descriptionAllLocales?: TLocalizedStringGraphql | null;
  __typename: 'AttributeGroup';
};

export type TAttributeGroupBuilder = TBuilder<AttributeGroup>;
export type TCreateAttributeGroupBuilder = () => TAttributeGroupBuilder;
