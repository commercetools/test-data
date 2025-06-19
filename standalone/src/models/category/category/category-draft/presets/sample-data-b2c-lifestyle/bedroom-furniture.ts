import { TBuilder } from '@/core';
import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../../commons';
import type { TCategoryDraft } from '../../../types';
import { compatPreset as emptyCompatPreset } from '../empty/empty';
import furniture from './furniture';

const furnitureDraft = furniture().build<TCategoryDraft>();

const bedroomFurniture = (): TBuilder<TCategoryDraft> =>
  emptyCompatPreset()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Bedroom Furniture')
        ['en-US']('Bedroom Furniture')
        ['de-DE']('Schlafzimmer')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('bedroom-furniture')
        ['en-US']('bedroom-furniture')
        ['de-DE']('bedroom-furniture')
    )
    .key('bedroom-furniture')
    .orderHint('.9')
    .parent(KeyReferenceDraft.presets.category().key(furnitureDraft.key!));

export default bedroomFurniture;
