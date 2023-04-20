import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import kids from './kids';

const kidsCategoryDraft = kids().build<TCategoryDraft>();

const otherKids = (): TCategoryDraftBuilder =>
  empty()
    .name(LocalizedString.presets.empty()['en-US']('Other'))
    .slug(LocalizedString.presets.empty()['en-US']('other_kids'))
    .parent(KeyReference.presets.category().key(kidsCategoryDraft.key!))
    .key('other-kids')
    .orderHint('0.25');

export default otherKids;
