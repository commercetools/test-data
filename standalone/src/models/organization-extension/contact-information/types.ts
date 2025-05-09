import { TBuilder } from '../../../core';
import type { TMcSettingsContactInformation } from '../../../graphql-types';

export type TContactInformation = Omit<
  TMcSettingsContactInformation,
  '__typename'
>;

export type TContactInformationGraphql = TMcSettingsContactInformation;

export type TContactInformationBuilder = TBuilder<TContactInformation>;
export type TCreateContactInformationBuilder = () => TContactInformationBuilder;
