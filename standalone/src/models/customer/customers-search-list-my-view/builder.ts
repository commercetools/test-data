import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCustomersSearchListMyView,
  TCreateCustomersSearchListMyView,
} from './types';

const Model: TCreateCustomersSearchListMyView = () =>
  Builder<TCustomersSearchListMyView>({
    generator,
    transformers,
  });

export default Model;
