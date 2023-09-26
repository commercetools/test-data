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
        ['en-US']('Collections')
        ['de-DE']('Sonderkollektionen')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('furniture-collections')
        ['en-US']('furniture-collections')
        ['de-DE']('collections')
    )
    .key('collections')
    .orderHint('.7')
    .parent(KeyReference.presets.category().key(furnitureDraft.key!));

export default collections;
