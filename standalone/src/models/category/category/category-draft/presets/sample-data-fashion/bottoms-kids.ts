import { TBuilder } from '@/core';
import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../../commons';
import type { TCategoryDraft } from '../../../types';
import { compatPreset as emptyCompatPreset } from '../empty/empty';
import clothingKids from './clothing-kids';

const clothingKidsDraft = clothingKids().build<TCategoryDraft>();

const bottomsKids = (): TBuilder<TCategoryDraft> =>
  emptyCompatPreset()
    .name(LocalizedStringDraft.presets.empty()['en-US']('Bottoms'))
    .slug(LocalizedStringDraft.presets.empty()['en-US']('bottoms_kids'))
    .description(LocalizedStringDraft.presets.empty()['en-US']('Bottoms'))
    .parent(KeyReferenceDraft.presets.category().key(clothingKidsDraft.key!))
    .key('bottoms_kids')
    .orderHint('0.3');

export default bottomsKids;
