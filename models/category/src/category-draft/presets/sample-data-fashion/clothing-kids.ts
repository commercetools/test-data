import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import kids from './kids';

const kidsCategoryDraft = kids().build<TCategoryDraft>();

const clothingKids = (): TCategoryDraftBuilder =>
  empty()
    .name(LocalizedString.presets.empty()['en-US']('Clothing'))
    .slug(LocalizedString.presets.empty()['en-US']('clothing_kids'))
    .parent(
      KeyReference.random().key(kidsCategoryDraft.key!).typeId('category')
    )
    .key('clothing-kids')
    .orderHint('0.8');

export default clothingKids;
