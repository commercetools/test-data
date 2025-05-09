import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import kids from './kids';

const kidsCategoryDraft = kids().build<TCategoryDraft>();

const otherKids = (): TCategoryDraftBuilder =>
  empty()
    .name(LocalizedStringDraft.presets.empty()['en-US']('Other'))
    .slug(LocalizedStringDraft.presets.empty()['en-US']('other_kids'))
    .parent(KeyReferenceDraft.presets.category().key(kidsCategoryDraft.key!))
    .key('other-kids')
    .orderHint('0.25');

export default otherKids;
