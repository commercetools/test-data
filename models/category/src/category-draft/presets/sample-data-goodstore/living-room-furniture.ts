import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';

import furniture from './furniture';

const furnitureDraft = furniture().build<TCategoryDraft>();

const livingRoomFurniture = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Living Room Furniture')
        ['de-DE']('Wohnzimmer')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('living-room-furniture')
        ['de-DE']('living-room-furniture')
    )
    .key('living-room-furniture')
    .key('.9')
    .parent(KeyReference.presets.category().key(furnitureDraft.key!));

export default livingRoomFurniture;
