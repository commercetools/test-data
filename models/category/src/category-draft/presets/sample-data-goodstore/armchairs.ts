import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';

import livingRoomFurniture from './living-room-furniture';

const livingRoomFurnitureDraft = livingRoomFurniture().build<TCategoryDraft>();

const armchairs = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Armchairs')
        ['de-DE']('Stühle')
        ['en-US']('Chairs')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('armchairs')
        ['de-DE']('chairs')
        ['en-US']('armchairs')
    )
    .key('armchairs')
    .orderHint('.3')
    .parent(KeyReference.presets.category().key(livingRoomFurnitureDraft.key!));

export default armchairs;
