import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';

import collections from './collections';

const collectionsDraft = collections().build<TCategoryDraft>();

const theMinimalist = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('The Minimalist')
        ['de-DE']('The Minimalist')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('the-minimalist')
        ['de-DE']('the-minimalist')
    )
    .key('the-minimalist')
    .orderHint('.003')
    .parent(KeyReference.presets.category().key(collectionsDraft.key!));

export default theMinimalist;
