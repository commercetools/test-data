import { Builder } from '@/core';
import type {
  TCreateProductSelectionSettingDraftBuilder,
  TProductSelectionSettingDraft,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateProductSelectionSettingDraftBuilder = () =>
  Builder<TProductSelectionSettingDraft>({
    generator,
    transformers,
  });

export default Model;
