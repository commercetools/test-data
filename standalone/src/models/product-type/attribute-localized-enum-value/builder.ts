import { Builder } from '../../../core';
import generator from './generator';
import transformers from './transformers';
import {
  TAttributeLocalizedEnumValue,
  TCreateAttributeLocalizedEnumValueBuilder,
} from './types';

const Model: TCreateAttributeLocalizedEnumValueBuilder = () =>
  Builder<TAttributeLocalizedEnumValue>({
    generator,
    transformers,
  });

export default Model;
