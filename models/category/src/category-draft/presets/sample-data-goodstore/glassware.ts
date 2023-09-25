import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import barGlassware from './bar-and-glassware';

const barGlasswareDraft = barGlassware().build<TCategoryDraft>();

const glassware = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Glassware')
        ['en-US']('Glassware')
        ['de-DE']('Gläser')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('glassware')
        ['en-US']('glassware')
        ['de-DE']('glaser')
    )
    .key('glassware')
    .orderHint('.23')
    .parent(KeyReference.presets.category().key(barGlasswareDraft.key!));

export default glassware;
