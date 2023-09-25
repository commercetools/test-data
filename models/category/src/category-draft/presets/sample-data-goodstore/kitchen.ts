import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';

const kitchen = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Kitchen')
        ['de-DE']('Küche')
        ['en-US']('Kitchen')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('kitchen')
        ['de-DE']('kitchen')
        ['en-US']('kitchen')
    )
    .key('kitchen')
    .orderHint('0.3');

export default kitchen;
