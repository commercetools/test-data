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
        ['en-US']('Bedroom Furniture')
        ['en-GB']('Bedroom Furniture')
        ['de-DE']('Schlafzimmer')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('bedroom-furniture')
        ['en-GB']('bedroom-furniture')
        ['de-DE']('bedroom-furniture')
    )
    .key('bedroom-furniture')
    .orderHint('.9')
    .parent(KeyReference.presets.category().key(furnitureDraft.key!));

export default bedroomFurniture;
