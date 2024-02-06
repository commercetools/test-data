import {
  LocalizedString,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import kids from './kids';

const kidsCategoryDraft = kids().build<TCategoryDraft>();

const clothingKids = (): TCategoryDraftBuilder =>
  empty()
    .name(LocalizedString.presets.empty()['en-US']('Clothing'))
    .slug(LocalizedString.presets.empty()['en-US']('clothing_kids'))
    .parent(KeyReferenceDraft.presets.category().key(kidsCategoryDraft.key!))
    .key('clothing-kids')
    .orderHint('0.8');

export default clothingKids;
