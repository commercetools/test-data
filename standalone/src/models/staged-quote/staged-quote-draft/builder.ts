import { Builder } from '../../../core';
import type {
  TStagedQuoteDraft,
  TCreateStagedQuoteDraftBuilder,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateStagedQuoteDraftBuilder = () =>
  Builder<TStagedQuoteDraft>({
    generator,
    transformers,
  });

export default Model;
