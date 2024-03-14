import type { TBuilder } from '@commercetools-test-data/core';
import type {
  TCoreOrganization,
  TCoreCreateOrganizationCommand,
} from '@commercetools-test-data/graphql-types/src/generated/core';

export type TOrganization = Omit<TCoreOrganization, '__typename'>;

export type TOrganizationGraphql = TCoreOrganization;

export type TCreateOrganizationCommand = TCoreCreateOrganizationCommand;

export type TOrganizationBuilder = TBuilder<TOrganization>;
export type TCreateOrganizationCommandBuilder =
  TBuilder<TCreateOrganizationCommand>;
export type TCreateOrganizationBuilder = () => TOrganizationBuilder;
export type TCreateCreateOrganizationCommandBuilder =
  () => TCreateOrganizationCommandBuilder;
