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
        ['en-US']('Living Room Furniture')
        ['de-DE']('Wohnzimmer')
        ['en-US']('Living Room Furniture')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('living-room-furniture')
        ['en-US']('living-room-furniture')
        ['de-DE']('living-room-furniture')
        ['en-US']('living-room-furniture')
    )
    .key('living-room-furniture')
    .orderHint('.9')
    .parent(KeyReference.presets.category().key(furnitureDraft.key!));

export default livingRoomFurniture;
