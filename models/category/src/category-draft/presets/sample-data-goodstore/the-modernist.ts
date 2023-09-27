import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';

import collections from './collections';

const collectionsDraft = collections().build<TCategoryDraft>();

const theModernist = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('The Modernist')
        ['de-DE']('The Modernist')
        ['en-US']('The Modernist')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('the-modernist')
        ['de-DE']('the-modernist')
        ['en-US']('the-modernist')
    )
    .key('the-modernist')
    .orderHint('.0035')
    .parent(KeyReference.presets.category().key(collectionsDraft.key!));

export default theModernist;
