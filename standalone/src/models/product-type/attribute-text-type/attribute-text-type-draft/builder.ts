import { Builder } from '../../../../core';
import {
  TAttributeTextType,
  TCreateAttributeTextTypeDraftBuilder,
} from '../types';
import { generator } from './generator';
import transformers from './transformers';

const Model: TCreateAttributeTextTypeDraftBuilder = () =>
  Builder<TAttributeTextType>({
    generator,
    transformers,
  });

export default Model;
