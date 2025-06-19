import { TBuilder } from '@/core';
import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../../commons';
import type { TCategoryDraft } from '../../../types';
import { compatPreset as emptyCompatPreset } from '../empty/empty';
import serveware from './serveware';

const servewareDraft = serveware().build<TCategoryDraft>();

const cheeseTrays = (): TBuilder<TCategoryDraft> =>
  emptyCompatPreset()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Cheese Trays')
        ['en-US']('Cheese Trays')
        ['de-DE']('Käseplatten')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('cheese-trays')
        ['en-US']('cheese-trays')
        ['de-DE']('cheese-trays')
    )
    .key('cheese-trays')
    .orderHint('.12')
    .parent(KeyReferenceDraft.presets.category().key(servewareDraft.key!));

export default cheeseTrays;
