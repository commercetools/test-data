import {
  LocalizedString,
  KeyReferenceDraft,
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
        ['en-US']('Chairs')
        ['de-DE']('Stühle')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('armchairs')
        ['en-US']('armchairs')
        ['de-DE']('chairs')
    )
    .key('armchairs')
    .orderHint('.3')
    .parent(
      KeyReferenceDraft.presets.category().key(livingRoomFurnitureDraft.key!)
    );

export default armchairs;
