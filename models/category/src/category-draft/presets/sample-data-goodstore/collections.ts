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
        ['en-US']('Collections')
        ['en-GB']('Collections')
        ['de-DE']('Sonderkollektionen')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('furniture-collections')
        ['en-GB']('furniture-collections')
        ['de-DE']('collections')
    )
    .key('collections')
    .orderHint('.7')
    .parent(KeyReference.presets.category().key(furnitureDraft.key!));

export default collections;
