import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../../commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import collections from './collections';

const collectionsDraft = collections().build<TCategoryDraft>();

const theMinimalist = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('The Minimalist')
        ['en-US']('The Minimalist')
        ['de-DE']('The Minimalist')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('the-minimalist')
        ['en-US']('the-minimalist')
        ['de-DE']('the-minimalist')
    )
    .key('the-minimalist')
    .orderHint('.003')
    .parent(KeyReferenceDraft.presets.category().key(collectionsDraft.key!));

export default theMinimalist;
