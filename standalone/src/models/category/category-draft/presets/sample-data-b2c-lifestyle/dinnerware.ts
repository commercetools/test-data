import { LocalizedStringDraft, KeyReferenceDraft } from '../../../../commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import kitchen from './kitchen';

const kitchenDraft = kitchen().build<TCategoryDraft>();

const dinnerware = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Serving and Tableware')
        ['en-US']('Dinnerware')
        ['de-DE']('Geschirr')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('serving-and-tableware')
        ['en-US']('serving-and-tableware')
        ['de-DE']('dinnerware')
    )
    .key('dinnerware')
    .orderHint('.75')
    .parent(KeyReferenceDraft.presets.category().key(kitchenDraft.key!));

export default dinnerware;
