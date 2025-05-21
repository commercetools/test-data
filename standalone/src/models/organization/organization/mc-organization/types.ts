import type { TBuilder } from '@/core';
import type { TMcOrganization as McOrganizationGraphql } from '@/graphql-types';

export type TMcOrganization = Omit<McOrganizationGraphql, '__typename'>;

export type TMcOrganizationGraphql = McOrganizationGraphql;

export type TMcOrganizationBuilder = TBuilder<TMcOrganization>;
export type TCreateMcOrganizationBuilder = () => TMcOrganizationBuilder;
