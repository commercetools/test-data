import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';

import furniture from './furniture';

const furnitureDraft = furniture().build<TCategoryDraft>();

const collections = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Collections')
        ['de-DE']('Sonderkollektionen')
        ['en-US']('Collections')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('furniture-collections')
        ['de-DE']('collections')
        ['en-US']('furniture-collections')
    )
    .key('collections')
    .orderHint('.7')
    .parent(KeyReference.presets.category().key(furnitureDraft.key!));

export default collections;