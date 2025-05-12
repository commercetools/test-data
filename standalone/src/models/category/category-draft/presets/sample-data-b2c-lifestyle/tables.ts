import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import livingRoomFurniture from './living-room-furniture';

const livingRoomFurnitureDraft = livingRoomFurniture().build<TCategoryDraft>();

const tables = (): TCategoryDraftBuilder =>
  empty()
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
