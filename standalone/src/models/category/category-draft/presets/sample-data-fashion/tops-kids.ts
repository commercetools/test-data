import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import clothingKids from './clothing-kids';

const clothingKidsDraft = clothingKids().build<TCategoryDraft>();

const topsKids = (): TCategoryDraftBuilder =>
  empty()
    .name(LocalizedStringDraft.presets.empty()['en-US']('Tops'))
    .slug(LocalizedStringDraft.presets.empty()['en-US']('tops_kids'))
    .description(LocalizedStringDraft.presets.empty()['en-US']('Tops'))
    .parent(KeyReferenceDraft.presets.category().key(clothingKidsDraft.key!))
    .key('tops-kids')
    .orderHint('0.3');

export default topsKids;
