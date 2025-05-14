import { LocalizedStringDraft, KeyReferenceDraft } from '../../../../commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import dinnerware from './dinnerware';

const dinnerwareDraft = dinnerware().build<TCategoryDraft>();

const bakeware = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Bakeware')
        ['en-US']('Bakeware')
        ['de-DE']('Backutensilien')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('bakeware')
        ['en-US']('bakeware')
        ['de-DE']('bakeware')
    )
    .key('bakeware')
    .orderHint('.42')
    .parent(KeyReferenceDraft.presets.category().key(dinnerwareDraft.key!));

export default bakeware;
