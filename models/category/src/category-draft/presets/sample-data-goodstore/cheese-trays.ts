import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import serveware from './serveware';

const servewareDraft = serveware().build<TCategoryDraft>();

const cheeseTrays = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Cheese Trays')
        ['en-US']('Cheese Trays')
        ['de-DE']('Käseplatten')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('cheese-trays')
        ['en-US']('cheese-trays')
        ['de-DE']('kaseplatten')
    )
    .key('cheese-trays')
    .orderHint('.12')
    .parent(KeyReference.presets.category().key(servewareDraft.key!));

export default cheeseTrays;
