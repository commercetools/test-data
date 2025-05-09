import { Builder } from '../../../../core';
import {
  TAttributeBooleanType,
  TCreateAttributeBooleanTypeDraftBuilder,
} from '../types';
import { generator } from './generator';
import transformers from './transformers';

const Model: TCreateAttributeBooleanTypeDraftBuilder = () =>
  Builder<TAttributeBooleanType>({
    generator,
    transformers,
  });

export default Model;
