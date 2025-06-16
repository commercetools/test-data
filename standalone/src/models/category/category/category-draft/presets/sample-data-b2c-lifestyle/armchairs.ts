import { TBuilder } from '@/core';
import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../../commons';
import type { TCategoryDraft } from '../../../types';
import { compatPreset as emptyCompatPreset } from '../empty/empty';
import livingRoomFurniture from './living-room-furniture';

const livingRoomFurnitureDraft = livingRoomFurniture().build<TCategoryDraft>();

const armchairs = (): TBuilder<TCategoryDraft> =>
  emptyCompatPreset()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Armchairs')
        ['en-US']('Chairs')
        ['de-DE']('Stühle')
    )
    .slug(
      LocalizedStringDraft.presets
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
