import { TBuilder } from '@/core';
import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../../commons';
import type { TCategoryDraft } from '../../../types';
import { compatPreset as emptyCompatPreset } from '../empty/empty';
import kids from './kids';

const kidsCategoryDraft = kids().build<TCategoryDraft>();

const clothingKids = (): TBuilder<TCategoryDraft> =>
  emptyCompatPreset()
    .name(LocalizedStringDraft.presets.empty()['en-US']('Clothing'))
    .slug(LocalizedStringDraft.presets.empty()['en-US']('clothing_kids'))
    .parent(KeyReferenceDraft.presets.category().key(kidsCategoryDraft.key!))
    .key('clothing-kids')
    .orderHint('0.8');

export default clothingKids;
