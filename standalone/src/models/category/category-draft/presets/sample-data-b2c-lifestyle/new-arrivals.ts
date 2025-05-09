import { LocalizedStringDraft } from '../../../../commons';
import type { TCategoryDraftBuilder } from '../../../types';
import empty from '../empty';

const newArrivals = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('New Arrivals')
        ['en-US']('New Arrivals')
        ['de-DE']('Neuheiten')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('new-arrivals')
        ['en-US']('new-arrivals')
        ['de-DE']('ganz-neu')
    )
    .key('new-arrivals')
    .orderHint('0.4');

export default newArrivals;
