import { Builder } from '../../../../core';
import {
  TAttributeLocalizedEnumValueDraft,
  TCreateAttributeLocalizedEnumValueDraftBuilder,
} from '../types';
import { generator } from './generator';
import transformers from './transformers';

const Model: TCreateAttributeLocalizedEnumValueDraftBuilder = () =>
  Builder<TAttributeLocalizedEnumValueDraft>({
    generator,
    transformers,
  });

export default Model;
