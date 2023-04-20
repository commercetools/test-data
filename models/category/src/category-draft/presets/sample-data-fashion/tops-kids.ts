import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import clothingKids from './clothing-kids';

const clothingKidsDraft = clothingKids().build<TCategoryDraft>();

const topsKids = (): TCategoryDraftBuilder =>
  empty()
    .name(LocalizedString.presets.empty()['en-US']('Tops'))
    .slug(LocalizedString.presets.empty()['en-US']('tops_kids'))
    .description(LocalizedString.presets.empty()['en-US']('Tops'))
    .parent(KeyReference.presets.category().key(clothingKidsDraft.key!))
    .key('tops-kids')
    .orderHint('0.3');

export default topsKids;
