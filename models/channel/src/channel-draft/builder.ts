import { Builder } from '@commercetools-test-data/core';
import type { TCreateChannelDraftBuilder, TChannelDraft } from '../types';
import generator from './generator';
import transformers from './transformers';

const ChannelDraft: TCreateChannelDraftBuilder = () =>
  Builder<TChannelDraft>({
    generator,
    transformers,
  });

export default ChannelDraft;
