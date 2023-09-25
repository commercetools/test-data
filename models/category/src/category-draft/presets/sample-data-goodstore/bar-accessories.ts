import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';

import barAndGlassware from './bar-and-glassware';

const barAndGlasswareDraft = barAndGlassware().build<TCategoryDraft>();

const barAccessories = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Bar Accessories')
        ['de-DE']('Barzubehör')
        ['en-US']('Bar Accessories')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('bar-accessories')
        ['de-DE']('bar-accessories')
        ['en-US']('bar-accessories')
    )
    .key('bar-accessories')
    .orderHint('.36')
    .parent(KeyReference.presets.category().key(barAndGlasswareDraft.key!));

export default barAccessories;
