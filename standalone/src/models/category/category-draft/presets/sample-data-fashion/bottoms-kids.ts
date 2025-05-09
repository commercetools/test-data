import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import clothingKids from './clothing-kids';

const clothingKidsDraft = clothingKids().build<TCategoryDraft>();

const bottomsKids = (): TCategoryDraftBuilder =>
  empty()
    .name(LocalizedStringDraft.presets.empty()['en-US']('Bottoms'))
    .slug(LocalizedStringDraft.presets.empty()['en-US']('bottoms_kids'))
    .description(LocalizedStringDraft.presets.empty()['en-US']('Bottoms'))
    .parent(KeyReferenceDraft.presets.category().key(clothingKidsDraft.key!))
    .key('bottoms_kids')
    .orderHint('0.3');

export default bottomsKids;
