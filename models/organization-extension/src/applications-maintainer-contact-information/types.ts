import { TBuilder } from '@commercetools-test-data/core';
import type { TMcSettingsContactInformation } from '@commercetools-test-data/graphql-types';

export type TContactInformation = Omit<
  TMcSettingsContactInformation,
  '__typename'
>;

export type TContactInformationGraphql = TMcSettingsContactInformation;

export type TContactInformationBuilder = TBuilder<TContactInformation>;
export type TCreateContactInformationBuilder = () => TContactInformationBuilder;
