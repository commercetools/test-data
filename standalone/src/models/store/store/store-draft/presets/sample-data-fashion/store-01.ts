import { TBuilder } from '@/core';
import { LocalizedStringDraft } from '../../../../../commons';
import { TStoreDraftRest, TStoreDraftGraphql } from '../../../types';
import * as StoreDraft from '../../index';

const store01 = (): TBuilder<TStoreDraftRest | TStoreDraftGraphql> =>
  StoreDraft.presets
    .empty()
    .key('sample_store_one')
    .name(LocalizedStringDraft.presets.empty()['en-US']('Sample Store One'));

export default store01;
