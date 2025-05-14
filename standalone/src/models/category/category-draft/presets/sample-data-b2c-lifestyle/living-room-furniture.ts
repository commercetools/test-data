import { LocalizedStringDraft, KeyReferenceDraft } from '../../../../commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import furniture from './furniture';

const furnitureDraft = furniture().build<TCategoryDraft>();

const livingRoomFurniture = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Living Room Furniture')
        ['en-US']('Living Room Furniture')
        ['de-DE']('Wohnzimmer')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('living-room-furniture')
        ['en-US']('living-room-furniture')
        ['de-DE']('living-room-furniture')
    )
    .key('living-room-furniture')
    .orderHint('.9')
    .parent(KeyReferenceDraft.presets.category().key(furnitureDraft.key!));

export default livingRoomFurniture;
