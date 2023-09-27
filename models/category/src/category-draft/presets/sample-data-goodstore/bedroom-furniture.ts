import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';

import furniture from './furniture';

const furnitureDraft = furniture().build<TCategoryDraft>();

const bedroomFurniture = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Bedroom Furniture')
        ['de-DE']('Schlafzimmer')
        ['en-US']('Bedroom Furniture')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('bedroom-furniture')
        ['de-DE']('bedroom-furniture')
        ['en-US']('bedroom-furniture')
    )
    .key('bedroom-furniture')
    .orderHint('.9')
    .parent(KeyReference.presets.category().key(furnitureDraft.key!));

export default bedroomFurniture;
