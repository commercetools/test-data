import { LocalizedStringDraft } from '@/models/commons';
import type { TStoreDraftBuilder } from '../../../types';
import * as StoreDraft from '../../index';

const store01 = (): TStoreDraftBuilder =>
  StoreDraft.presets
    .empty()
    .key('sample_store_three')
    .name(LocalizedStringDraft.presets.empty()['en-US']('Sample Store Three'));

export default store01;
