import { TBuilder } from '@/core';
import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../../commons';
import type { TCategoryDraft } from '../../../types';
import { compatPreset as emptyCompatPreset } from '../empty/empty';
import kids from './kids';

const kidsCategoryDraft = kids().build<TCategoryDraft>();

const otherKids = (): TBuilder<TCategoryDraft> =>
  emptyCompatPreset()
    .name(LocalizedStringDraft.presets.empty()['en-US']('Other'))
    .slug(LocalizedStringDraft.presets.empty()['en-US']('other_kids'))
    .parent(KeyReferenceDraft.presets.category().key(kidsCategoryDraft.key!))
    .key('other-kids')
    .orderHint('0.25');

export default otherKids;
