import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';

import kitchen from './kitchen';

const kitchenDraft = kitchen().build<TCategoryDraft>();

const dinnerware = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Serving & Tableware')
        ['de-DE']('Geschirr')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('serving-and-tableware')
        ['de-DE']('dinnerware')
    )
    .key('dinnerware')
    .orderHint('.75')
    .parent(KeyReference.presets.category().key(kitchenDraft.key!));

export default dinnerware;
