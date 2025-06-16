import { TBuilder } from '@/core';
import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../../commons';
import type { TCategoryDraft } from '../../../types';
import { compatPreset as emptyCompatPreset } from '../empty/empty';
import collections from './collections';

const collectionsDraft = collections().build<TCategoryDraft>();

const theModernist = (): TBuilder<TCategoryDraft> =>
  emptyCompatPreset()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('The Modernist')
        ['en-US']('The Modernist')
        ['de-DE']('The Modernist')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('the-modernist')
        ['en-US']('the-modernist')
        ['de-DE']('the-modernist')
    )
    .key('the-modernist')
    .orderHint('.0035')
    .parent(KeyReferenceDraft.presets.category().key(collectionsDraft.key!));

export default theModernist;
