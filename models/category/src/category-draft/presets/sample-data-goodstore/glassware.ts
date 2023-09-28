import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';

import barAndGlassware from './bar-and-glassware';

const barAndGlasswareDraft = barAndGlassware().build<TCategoryDraft>();

const glassware = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Glassware')
        ['en-GB']('Glassware')
        ['de-DE']('Gläser')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('glassware')
        ['en-GB']('glassware')
        ['de-DE']('glassware')
    )
    .key('glassware')
    .orderHint('.23')
    .parent(KeyReference.presets.category().key(barAndGlasswareDraft.key!));

export default glassware;
