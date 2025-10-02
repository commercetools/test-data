import type { AttributeGroup } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import {
  TLocalizedStringDraft,
  TLocalizedStringGraphql,
} from '@/models/commons';

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

export type TAttributeGroupDraftRest = TAttributeGroupDraft;

export type TAttributeReference = {
  key: string;
};

export type TAttributeGroupDraft = {
  key: string;
  name: TLocalizedStringDraft;
  description?: TLocalizedStringDraft;
  attributes?: TAttributeReference[];
};

export type TAttributeGroupDraftGraphql = Omit<
  TAttributeGroupDraft,
  'name' | 'description'
> & {
  name: string;
  nameAllLocales?: TLocalizedStringGraphql | null;
  description?: string | null;
  descriptionAllLocales?: TLocalizedStringGraphql | null;
  __typename: 'AttributeGroupDraft';
};

export type TAttributeGroupDraftBuilder = TBuilder<TAttributeGroupDraft>;
export type TCreateAttributeGroupDraftBuilder =
  () => TAttributeGroupDraftBuilder;
