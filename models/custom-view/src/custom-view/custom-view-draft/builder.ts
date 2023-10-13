import { Builder } from '@commercetools-test-data/core';
import type { TCreateCustomViewDraftBuilder, CustomViewDraft } from '../types';
import generator from './generator';
import transformers from './transformers';

const ChannelDraft: TCreateCustomViewDraftBuilder = () =>
  Builder<CustomViewDraft>({
    generator,
    transformers,
  });

export default ChannelDraft;
