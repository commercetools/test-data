import { TBuilder } from '@/core';
import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../../commons';
import type { TCategoryDraft } from '../../../types';
import { compatPreset as emptyCompatPreset } from '../empty/empty';
import dinnerware from './dinnerware';

const dinnerwareDraft = dinnerware().build<TCategoryDraft>();

const bowls = (): TBuilder<TCategoryDraft> =>
  emptyCompatPreset()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Bowls')
        ['en-US']('Bowls')
        ['de-DE']('Schalen')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('bowls')
        ['en-US']('bowls')
        ['de-DE']('bowls')
    )
    .key('bowls')
    .orderHint('.56')
    .parent(KeyReferenceDraft.presets.category().key(dinnerwareDraft.key!));

export default bowls;
