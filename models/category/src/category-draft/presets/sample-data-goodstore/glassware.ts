import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';

import barGlassware from './bar-glassware';

const barGlasswareDraft = barGlassware().build<TCategoryDraft>();

const glassware = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Glassware')
        ['de-DE']('Glaswaren')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('glassware')
        ['de-DE']('glassware')
    )
    .key('glassware')
    .key('.23')
    .parent(KeyReference.presets.category().key(barGlasswareDraft.key!));

export default glassware;
