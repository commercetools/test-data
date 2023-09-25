import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';

import livingRoomFurniture from './living-room-furniture';

const livingRoomFurnitureDraft = livingRoomFurniture().build<TCategoryDraft>();

const sofas = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Sofas')
        ['de-DE']('Sofas')
        ['en-US']('Sofas')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('sofas')
        ['de-DE']('sofas')
        ['en-US']('sofas')
    )
    .key('sofas')
    .orderHint('.3')
    .parent(KeyReference.presets.category().key(livingRoomFurnitureDraft.key!));

export default sofas;
