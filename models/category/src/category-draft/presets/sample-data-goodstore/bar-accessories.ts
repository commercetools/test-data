import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';

import barGlassware from './bar-glassware';

const barGlasswareDraft = barGlassware().build<TCategoryDraft>();

const barAccessories = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Bar Accessories')
        ['de-DE']('Bar Zubehör')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('bar-accessories')
        ['de-DE']('bar-accessories')
    )
    .key('bar-accessories')
    .key('.36')
    .parent(KeyReference.presets.category().key(barGlasswareDraft.key!));

export default barAccessories;
