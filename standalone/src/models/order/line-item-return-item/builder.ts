import { Builder } from '../../../core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCreateLineItemReturnItemBuilder,
  TLineItemReturnItem,
} from './types';

const Model: TCreateLineItemReturnItemBuilder = () =>
  Builder<TLineItemReturnItem>({
    generator,
    transformers,
  });

export default Model;
