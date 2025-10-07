import type {
  AttributeGroup,
  AttributeGroupDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import type { TCtpAttributeGroupDraft } from '@/graphql-types';
import { TLocalizedStringGraphql } from '@/models/commons';

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

export type TAttributeGroupDraftRest = AttributeGroupDraft;
export type TAttributeGroupDraftGraphql = TCtpAttributeGroupDraft;

export type TAttributeGroupDraftBuilder = TBuilder<
  TAttributeGroupDraftRest | TAttributeGroupDraftGraphql
>;
export type TCreateAttributeGroupDraftBuilder =
  () => TAttributeGroupDraftBuilder;
