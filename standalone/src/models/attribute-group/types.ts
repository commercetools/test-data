import type {
  AttributeGroup,
  AttributeGroupDraft,
  AttributeReference,
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

export type TAttributeGroupDraft = AttributeGroupDraft;
export type TAttributeGroupDraftRest = TAttributeGroupDraft;
export type TAttributeGroupDraftGraphql = TCtpAttributeGroupDraft;

export type TAttributeGroupDraftBuilder = TBuilder<TAttributeGroupDraft>;
export type TCreateAttributeGroupDraftBuilder =
  () => TAttributeGroupDraftBuilder;
