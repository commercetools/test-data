import { Builder } from '@/core';
import type { TCreateCustomViewDraftBuilder, TCustomViewDraft } from '../types';
import generator from './generator';
import transformers from './transformers';

const ChannelDraft: TCreateCustomViewDraftBuilder = () =>
  Builder<TCustomViewDraft>({
    generator,
    transformers,
  });

export default ChannelDraft;
