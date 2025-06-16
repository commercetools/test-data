import { TBuilder } from '@/core';
import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../../commons';
import type { TCategoryDraft } from '../../../types';
import { compatPreset as emptyCompatPreset } from '../empty/empty';
import dinnerware from './dinnerware';

const dinnerwareDraft = dinnerware().build<TCategoryDraft>();

const bakeware = (): TBuilder<TCategoryDraft> =>
  emptyCompatPreset()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Bakeware')
        ['en-US']('Bakeware')
        ['de-DE']('Backutensilien')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('bakeware')
        ['en-US']('bakeware')
        ['de-DE']('bakeware')
    )
    .key('bakeware')
    .orderHint('.42')
    .parent(KeyReferenceDraft.presets.category().key(dinnerwareDraft.key!));

export default bakeware;
