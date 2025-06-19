import { TBuilder } from '@/core';
import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../../commons';
import type { TCategoryDraft } from '../../../types';
import { compatPreset as emptyCompatPreset } from '../empty/empty';
import serveware from './serveware';

const servewareDraft = serveware().build<TCategoryDraft>();

const servingPlatters = (): TBuilder<TCategoryDraft> =>
  emptyCompatPreset()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Serving Platters')
        ['en-US']('Serving Platters')
        ['de-DE']('Servierplatten')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('serving-platters')
        ['en-US']('serving-platters')
        ['de-DE']('serving-platters')
    )
    .key('serving-platters')
    .orderHint('.0004')
    .parent(KeyReferenceDraft.presets.category().key(servewareDraft.key!));

export default servingPlatters;
