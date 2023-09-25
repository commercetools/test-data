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
        ['en-GB']('Kitchen Collections')
        ['en-US']('Kitchen Collections')
        ['de-DE']('Alles zum Servieren')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('kitchen-collections')
        ['en-US']('kitchen-collections')
        ['de-DE']('kitchen-collections')
    )
    .key('serveware')
    .orderHint('.86')
    .parent(KeyReference.presets.category().key(kitchenDraft.key!));

export default serveware;
