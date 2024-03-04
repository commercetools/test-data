import type { TBuilder } from '@commercetools-test-data/core';
import type { TMcOrganization as McOrganizationGraphql } from '@commercetools-test-data/graphql-types/src/generated/mc';

export type TMcOrganization = Omit<McOrganizationGraphql, '__typename'>;

export type TMcOrganizationGraphql = McOrganizationGraphql;

export type TMcOrganizationBuilder = TBuilder<TMcOrganization>;
export type TCreateMcOrganizationBuilder = () => TMcOrganizationBuilder;
