import type { TBuilder } from '@commercetools-test-data/core';
import type { TMcSettingsSampleDataImportMetadata } from '@commercetools-test-data/graphql-types/src/generated/settings';

export type TSampleDataImportMetadata = Omit<
  TMcSettingsSampleDataImportMetadata,
  '__typename'
>;

export type TSampleDataImportMetadataGraphql =
  TMcSettingsSampleDataImportMetadata;

export type TSampleDataImportMetadataBuilder =
  TBuilder<TSampleDataImportMetadata>;
export type TCreateSampleDataImportMetadataBuilder =
  () => TSampleDataImportMetadataBuilder;
