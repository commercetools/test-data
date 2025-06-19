import { TBuilder } from '@/core';
import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../../commons';
import type { TCategoryDraft } from '../../../types';
import { compatPreset as emptyCompatPreset } from '../empty/empty';
import homeDecor from './home-decor';

const homeDecorDraft = homeDecor().build<TCategoryDraft>();

const bedding = (): TBuilder<TCategoryDraft> =>
  emptyCompatPreset()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Bedding')
        ['en-US']('Bedding')
        ['de-DE']('Bettwäsche')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('bedding')
        ['en-US']('bedding')
        ['de-DE']('bettwsche') // typo exists in MC data
    )
    .key('bedding')
    .orderHint('.5')
    .parent(KeyReferenceDraft.presets.category().key(homeDecorDraft.key!));

export default bedding;
