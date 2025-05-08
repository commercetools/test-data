import { Builder } from '../../../../core';
import type {
  TCreateCustomApplicationSubmenuLinkDraftBuilder,
  TCustomApplicationSubmenuLinkDraft,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateCustomApplicationSubmenuLinkDraftBuilder = () =>
  Builder<TCustomApplicationSubmenuLinkDraft>({
    generator,
    transformers,
  });

export default Model;
