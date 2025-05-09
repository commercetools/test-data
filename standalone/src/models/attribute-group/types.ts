import type { AttributeGroup } from '@commercetools/platform-sdk';
import type { TBuilder } from '../../core';
import { TLocalizedStringGraphql } from '../commons';

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
