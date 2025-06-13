import { LocalizedStringDraft } from '../../../../../commons';
import type { TCategoryDraftBuilder } from '../../../types';
import empty from '../empty';

const kitchen = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Kitchen')
        ['en-US']('Kitchen')
        ['de-DE']('Küche')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('kitchen')
        ['en-US']('kitchen')
        ['de-DE']('kitchen')
    )
    .key('kitchen')
    .orderHint('0.3');

export default kitchen;
