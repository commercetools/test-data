import { LocalizedStringDraft, KeyReferenceDraft } from '../../../../commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import collections from './collections';

const collectionsDraft = collections().build<TCategoryDraft>();

const theTraditionalist = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('The Traditionalist')
        ['en-US']('The Traditionalist')
        ['de-DE']('The Traditionalist')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('the-traditionalist')
        ['en-US']('the-traditionalist')
        ['de-DE']('the-traditionalist')
    )
    .key('the-traditionalist')
    .orderHint('0.0033')
    .parent(KeyReferenceDraft.presets.category().key(collectionsDraft.key!));

export default theTraditionalist;
