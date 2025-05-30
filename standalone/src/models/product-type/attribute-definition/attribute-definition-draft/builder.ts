import { Builder } from '@/core';
import type {
  TCreateAttributeDefinitionDraftBuilder,
  TAttributeDefinitionDraft,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateAttributeDefinitionDraftBuilder = () =>
  Builder<TAttributeDefinitionDraft>({
    generator,
    transformers,
  });

export default Model;
