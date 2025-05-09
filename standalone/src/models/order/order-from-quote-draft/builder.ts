import { Builder } from '../../../core';
import type {
  TOrderFromQuoteDraft,
  TCreateOrderFromQuoteDraftBuilder,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateOrderFromQuoteDraftBuilder = () =>
  Builder<TOrderFromQuoteDraft>({
    generator,
    transformers,
  });

export default Model;
