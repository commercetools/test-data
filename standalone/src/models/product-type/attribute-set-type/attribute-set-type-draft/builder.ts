import { Builder } from '../../../../core';
import {
  TAttributeSetTypeDraft,
  TCreateAttributeSetTypeDraftBuilder,
} from '../types';
import { generator } from './generator';
import transformers from './transformers';

const Model: TCreateAttributeSetTypeDraftBuilder = () =>
  Builder<TAttributeSetTypeDraft>({
    generator,
    transformers,
  });

export default Model;
