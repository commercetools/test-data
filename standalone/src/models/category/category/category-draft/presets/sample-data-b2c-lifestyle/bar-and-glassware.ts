import { TBuilder } from '@/core';
import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../../commons';
import type { TCategoryDraft } from '../../../types';
import { compatPreset as emptyCompatPreset } from '../empty/empty';
import kitchen from './kitchen';

const kitchenDraft = kitchen().build<TCategoryDraft>();

const barAndGlassware = (): TBuilder<TCategoryDraft> =>
  emptyCompatPreset()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Bar and Glassware')
        ['en-US']('Bar and Glassware')
        ['de-DE']('Gläser und Barzubehör')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('bar-and-glassware')
        ['en-US']('bar-and-glassware')
        ['de-DE']('bar-and-glassware')
    )
    .key('bar-and-glassware')
    .orderHint('.82')
    .parent(KeyReferenceDraft.presets.category().key(kitchenDraft.key!));

export default barAndGlassware;
