import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';

const newArrivals = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('New Arrivals')
        ['de-DE']('Ganz Neu')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('new-arrivals')
        ['de-DE']('ganz-neu')
    )
    .key('new-arrivals')
    .key('0.4');

export default newArrivals;
