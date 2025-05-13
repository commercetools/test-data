import { LocalizedStringDraft, KeyReferenceDraft } from '@/models/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import kitchen from './kitchen';

const kitchenDraft = kitchen().build<TCategoryDraft>();

const barAndGlassware = (): TCategoryDraftBuilder =>
  empty()
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
