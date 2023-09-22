import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';

import kitchen from './kitchen';

const kitchenDraft = kitchen().build<TCategoryDraft>();

const serveware = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Collections')
        ['de-DE']('Alles zum Servieren')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('kitchen-collections')
        ['de-DE']('serveware')
    )
    .key('serveware')
    .orderHint('.86')
    .parent(KeyReference.presets.category().key(kitchenDraft.key!));

export default serveware;
