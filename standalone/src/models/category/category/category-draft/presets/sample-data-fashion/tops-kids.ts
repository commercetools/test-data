import { TBuilder } from '@/core';
import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../../commons';
import type { TCategoryDraft } from '../../../types';
import { compatPreset as emptyCompatPreset } from '../empty/empty';
import clothingKids from './clothing-kids';

const clothingKidsDraft = clothingKids().build<TCategoryDraft>();

const topsKids = (): TBuilder<TCategoryDraft> =>
  emptyCompatPreset()
    .name(LocalizedStringDraft.presets.empty()['en-US']('Tops'))
    .slug(LocalizedStringDraft.presets.empty()['en-US']('tops_kids'))
    .description(LocalizedStringDraft.presets.empty()['en-US']('Tops'))
    .parent(KeyReferenceDraft.presets.category().key(clothingKidsDraft.key!))
    .key('tops-kids')
    .orderHint('0.3');

export default topsKids;
