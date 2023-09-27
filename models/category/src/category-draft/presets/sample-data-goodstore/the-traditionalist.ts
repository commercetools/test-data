import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';

import collections from './collections';

const collectionsDraft = collections().build<TCategoryDraft>();

const theTraditionalist = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('The Traditionalist')
        ['de-DE']('The Traditionalist')
        ['en-US']('The Traditionalist')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('the-traditionalist')
        ['de-DE']('the-traditionalist')
        ['en-US']('the-traditionalist')
    )
    .key('the-traditionalist')
    .orderHint('0.0033')
    .parent(KeyReference.presets.category().key(collectionsDraft.key!));

export default theTraditionalist;
