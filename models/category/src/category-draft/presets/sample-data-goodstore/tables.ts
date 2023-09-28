import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';

import livingRoomFurniture from './living-room-furniture';

const livingRoomFurnitureDraft = livingRoomFurniture().build<TCategoryDraft>();

const tables = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Tables')
        ['en-GB']('Tables')
        ['de-DE']('Tische')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('living-room-tables')
        ['en-GB']('living-room-tables')
        ['de-DE']('coffee-tables')
    )
    .key('tables')
    .orderHint('.25')
    .parent(KeyReference.presets.category().key(livingRoomFurnitureDraft.key!));

export default tables;
