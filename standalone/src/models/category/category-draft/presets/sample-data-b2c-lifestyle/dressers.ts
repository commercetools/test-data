import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import bedroomFurniture from './bedroom-furniture';

const bedroomFurnitureDraft = bedroomFurniture().build<TCategoryDraft>();

const dressers = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Storage & Tables')
        ['en-US']('Dressers')
        ['de-DE']('Kommoden')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('storage-and-tables')
        ['en-US']('storage-and-tables')
        ['de-DE']('dressers')
    )
    .key('storage--tables')
    .orderHint('.1')
    .parent(
      KeyReferenceDraft.presets.category().key(bedroomFurnitureDraft.key!)
    );

export default dressers;
