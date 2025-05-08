import { Builder } from '../../../core';
import type {
  TCreateProductSelectionDraftBuilder,
  TProductSelectionDraft,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateProductSelectionDraftBuilder = () =>
  Builder<TProductSelectionDraft>({
    generator,
    transformers,
  });

export default Model;
