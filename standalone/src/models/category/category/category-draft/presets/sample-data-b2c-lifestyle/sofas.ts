import { TBuilder } from '@/core';
import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../../commons';
import type { TCategoryDraft } from '../../../types';
import { compatPreset as emptyCompatPreset } from '../empty/empty';
import livingRoomFurniture from './living-room-furniture';

const livingRoomFurnitureDraft = livingRoomFurniture().build<TCategoryDraft>();

const sofas = (): TBuilder<TCategoryDraft> =>
  emptyCompatPreset()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Sofas')
        ['en-US']('Sofas')
        ['de-DE']('Sofas')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('sofas')
        ['en-US']('sofas')
        ['de-DE']('sofas')
    )
    .key('sofas')
    .orderHint('.3')
    .parent(
      KeyReferenceDraft.presets.category().key(livingRoomFurnitureDraft.key!)
    );

export default sofas;
