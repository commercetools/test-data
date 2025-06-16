import { TBuilder } from '@/core';
import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../../commons';
import type { TCategoryDraft } from '../../../types';
import { compatPreset as emptyCompatPreset } from '../empty/empty';
import furniture from './furniture';

const furnitureDraft = furniture().build<TCategoryDraft>();

const collections = (): TBuilder<TCategoryDraft> =>
  emptyCompatPreset()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Collections')
        ['en-US']('Collections')
        ['de-DE']('Sonderkollektionen')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('furniture-collections')
        ['en-US']('furniture-collections')
        ['de-DE']('collections')
    )
    .key('collections')
    .orderHint('.7')
    .parent(KeyReferenceDraft.presets.category().key(furnitureDraft.key!));

export default collections;
