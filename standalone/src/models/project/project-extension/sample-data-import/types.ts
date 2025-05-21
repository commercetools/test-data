import type { TBuilder } from '@/core';
import type { TMcSettingsSampleDataImportMetadata } from '@/graphql-types';

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
