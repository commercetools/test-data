import { TBuilder } from '@/core';
import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../../commons';
import type { TCategoryDraft } from '../../../types';
import { compatPreset as emptyCompatPreset } from '../empty/empty';
import bedroomFurniture from './bedroom-furniture';

const bedroomFurnitureDraft = bedroomFurniture().build<TCategoryDraft>();

const dressers = (): TBuilder<TCategoryDraft> =>
  emptyCompatPreset()
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
