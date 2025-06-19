import { TBuilder } from '@/core';
import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../../commons';
import type { TCategoryDraft } from '../../../types';
import { compatPreset as emptyCompatPreset } from '../empty/empty';
import bedroomFurniture from './bedroom-furniture';

const bedroomFurnitureDraft = bedroomFurniture().build<TCategoryDraft>();

const beds = (): TBuilder<TCategoryDraft> =>
  emptyCompatPreset()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Beds')
        ['en-US']('Beds')
        ['de-DE']('Betten')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('beds')
        ['en-US']('beds')
        ['de-DE']('beds')
    )
    .key('beds')
    .orderHint('.4')
    .parent(
      KeyReferenceDraft.presets.category().key(bedroomFurnitureDraft.key!)
    );

export default beds;
