import type {
  AttributeGroup,
  AttributeGroupDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import type {
  TCtpAttributeGroup,
  TCtpAttributeGroupDraft,
} from '@/graphql-types';

/**
 * @deprecated Use `TAttributeGroupRest` or `TAttributeGroupGraphql` instead
 */
export type TAttributeGroup = AttributeGroup;
export type TAttributeGroupRest = AttributeGroup;
export type TAttributeGroupGraphql = TCtpAttributeGroup;

export type TAttributeGroupDraftRest = AttributeGroupDraft;
export type TAttributeGroupDraftGraphql = TCtpAttributeGroupDraft;

export type TCreateAttributeGroupBuilder<
  TAssociateRoleModel extends
    | TAttributeGroup
    | TAttributeGroupGraphql
    | TAttributeGroupDraftRest
    | TAttributeGroupDraftGraphql
    | TAttributeGroupGraphql
    | TAttributeGroupDraftRest
    | TAttributeGroupDraftGraphql,
> = () => TBuilder<TAssociateRoleModel>;
