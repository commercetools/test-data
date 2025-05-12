import { Builder } from '../../../core';
import generator from './generator';
import transformers from './transformers';
import type {
  TContactInformation,
  TCreateContactInformationBuilder,
} from './types';

const Model: TCreateContactInformationBuilder = () =>
  Builder<TContactInformation>({
    generator,
    transformers,
  });

export default Model;
