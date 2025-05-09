import { Builder } from '../../../../core';
import {
  TAttributeDateTimeType,
  TCreateAttributeDateTimeTypeDraftBuilder,
} from '../types';
import { generator } from './generator';
import transformers from './transformers';

const Model: TCreateAttributeDateTimeTypeDraftBuilder = () =>
  Builder<TAttributeDateTimeType>({
    generator,
    transformers,
  });

export default Model;
