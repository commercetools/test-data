import { LocalizedStringDraft, KeyReferenceDraft } from '../../../../commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import barGlassware from './bar-and-glassware';

const barGlasswareDraft = barGlassware().build<TCategoryDraft>();

const glassware = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Glassware')
        ['en-US']('Glassware')
        ['de-DE']('Gläser')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('glassware')
        ['en-US']('glassware')
        ['de-DE']('glassware')
    )
    .key('glassware')
    .orderHint('.23')
    .parent(KeyReferenceDraft.presets.category().key(barGlasswareDraft.key!));

export default glassware;
