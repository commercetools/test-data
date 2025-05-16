import type { TBuilder } from '../../../../core';
import type {
  TCoreOrganization,
  TCoreCreateOrganizationCommand,
} from '../../../../graphql-types';

export type TOrganization = Omit<TCoreOrganization, '__typename'>;

export type TOrganizationGraphql = TCoreOrganization;

export type TCreateOrganizationCommand = TCoreCreateOrganizationCommand;

export type TOrganizationBuilder = TBuilder<TOrganization>;
export type TCreateOrganizationCommandBuilder =
  TBuilder<TCreateOrganizationCommand>;
export type TCreateOrganizationBuilder = () => TOrganizationBuilder;
export type TCreateCreateOrganizationCommandBuilder =
  () => TCreateOrganizationCommandBuilder;
