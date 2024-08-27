import type { AttributeGroup } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TAttributeGroup = AttributeGroup;
export type TAttributeGroupGraphql = TAttributeGroup & {
  __typename: 'AttributeGroup';
};

export type TAttributeGroupBuilder = TBuilder<AttributeGroup>;
export type TCreateAssociateRoleBuilder = () => TAttributeGroupBuilder;
