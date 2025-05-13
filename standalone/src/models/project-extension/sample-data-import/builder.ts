import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCreateSampleDataImportMetadataBuilder,
  TSampleDataImportMetadata,
} from './types';

const Model: TCreateSampleDataImportMetadataBuilder = () =>
  Builder<TSampleDataImportMetadata>({
    generator,
    transformers,
  });

export default Model;
