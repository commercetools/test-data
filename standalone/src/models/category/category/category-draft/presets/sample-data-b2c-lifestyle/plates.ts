import { TBuilder } from '@/core';
import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../../commons';
import type { TCategoryDraft } from '../../../types';
import { compatPreset as emptyCompatPreset } from '../empty/empty';
import dinnerware from './dinnerware';

const dinnerwareDraft = dinnerware().build<TCategoryDraft>();

const plates = (): TBuilder<TCategoryDraft> =>
  emptyCompatPreset()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Plates')
        ['en-US']('Plates')
        ['de-DE']('Platten')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('plates')
        ['en-US']('plates')
        ['de-DE']('plates')
    )
    .key('plates')
    .orderHint('.82')
    .parent(KeyReferenceDraft.presets.category().key(dinnerwareDraft.key!));

export default plates;
