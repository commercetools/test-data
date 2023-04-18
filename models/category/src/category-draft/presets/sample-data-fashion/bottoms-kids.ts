import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import clothingKids from './clothing-kids';

const clothingKidsDraft = clothingKids().build<TCategoryDraft>();

const bottomsKids = (): TCategoryDraftBuilder =>
  empty()
    .name(LocalizedString.presets.empty()['en-US']('Bottoms'))
    .slug(LocalizedString.presets.empty()['en-US']('bottoms_kids'))
    .description(LocalizedString.presets.empty()['en-US']('Bottoms'))
    .parent(
      KeyReference.random().key(clothingKidsDraft.key!).typeId('category')
    )
    .key('bottoms_kids')
    .orderHint('0.3');

export default bottomsKids;
