import { LocalizedStringDraft } from '../../../../../commons';
import type { TStoreDraftBuilder } from '../../../types';
import * as StoreDraft from '../../index';

const store01 = (): TStoreDraftBuilder =>
  StoreDraft.presets
    .empty()
    .key('sample_store_one')
    .name(LocalizedStringDraft.presets.empty()['en-US']('Sample Store One'));

export default store01;
