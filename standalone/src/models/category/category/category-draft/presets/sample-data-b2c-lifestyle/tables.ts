import { TBuilder } from '@/core';
import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../../commons';
import type { TCategoryDraft } from '../../../types';
import { compatPreset as emptyCompatPreset } from '../empty/empty';
import livingRoomFurniture from './living-room-furniture';

const livingRoomFurnitureDraft = livingRoomFurniture().build<TCategoryDraft>();

const tables = (): TBuilder<TCategoryDraft> =>
  emptyCompatPreset()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Tables')
        ['en-US']('Tables')
        ['de-DE']('Tische')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('living-room-tables')
        ['en-US']('living-room-tables')
        ['de-DE']('coffee-tables')
    )
    .key('tables')
    .orderHint('.25')
    .parent(
      KeyReferenceDraft.presets.category().key(livingRoomFurnitureDraft.key!)
    );

export default tables;
