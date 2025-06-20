import { TBuilder } from '@/core';
import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../../commons';
import type { TCategoryDraft } from '../../../types';
import { compatPreset as emptyCompatPreset } from '../empty/empty';
import kitchen from './kitchen';

const kitchenDraft = kitchen().build<TCategoryDraft>();

const serveware = (): TBuilder<TCategoryDraft> =>
  emptyCompatPreset()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Collections') // matches MC
        ['en-US']('Kitchen Collections')
        ['de-DE']('Alles zum Servieren')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('kitchen-collections')
        ['en-US']('kitchen-collections')
        ['de-DE']('serveware')
    )
    .key('serveware')
    .orderHint('.86')
    .parent(KeyReferenceDraft.presets.category().key(kitchenDraft.key!));

export default serveware;
