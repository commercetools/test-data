import { Builder } from '../../../../core';
import {
  TAttributeReferenceTypeDraft,
  TCreateAttributeReferenceTypeDraftBuilder,
} from '../types';
import { generator } from './generator';
import transformers from './transformers';

const Model: TCreateAttributeReferenceTypeDraftBuilder = () =>
  Builder<TAttributeReferenceTypeDraft>({
    generator,
    transformers,
  });

export default Model;
