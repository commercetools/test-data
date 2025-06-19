import { TBuilder } from '@/core';
import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../../commons';
import type { TCategoryDraft } from '../../../types';
import { compatPreset as emptyCompatPreset } from '../empty/empty';
import collections from './collections';

const collectionsDraft = collections().build<TCategoryDraft>();

const theMinimalist = (): TBuilder<TCategoryDraft> =>
  emptyCompatPreset()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('The Minimalist')
        ['en-US']('The Minimalist')
        ['de-DE']('The Minimalist')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('the-minimalist')
        ['en-US']('the-minimalist')
        ['de-DE']('the-minimalist')
    )
    .key('the-minimalist')
    .orderHint('.003')
    .parent(KeyReferenceDraft.presets.category().key(collectionsDraft.key!));

export default theMinimalist;
