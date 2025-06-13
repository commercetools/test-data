import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../../commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import barGlassware from './bar-and-glassware';

const barGlasswareDraft = barGlassware().build<TCategoryDraft>();

const barAccessories = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Bar Accessories')
        ['en-US']('Bar Accessories')
        ['de-DE']('Barzubehör')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('bar-accessories')
        ['en-US']('bar-accessories')
        ['de-DE']('bar-accessories')
    )
    .key('bar-accessories')
    .orderHint('.36')
    .parent(KeyReferenceDraft.presets.category().key(barGlasswareDraft.key!));

export default barAccessories;
