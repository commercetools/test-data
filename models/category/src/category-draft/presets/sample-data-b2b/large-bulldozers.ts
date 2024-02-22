import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';

const largeBulldozers = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Großraumbagger')
        ['it-IT']('Bulldozer')
        ['nl-NL']('Bulldozers')
        ['fr-FR']('Bulldozers')
        ['en-AU']('Bulldozers')
        ['es-ES']('Bulldozers')
        ['en-GB']('Bulldozers')
        ['en-NZ']('Bulldozers')
        ['pt-PT']('Bulldozers')
        ['en-US']('Bulldozers')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('grossraumbagger_bulldozer')
        ['it-IT']('large_bulldozers')
        ['nl-NL']('large_bulldozers')
        ['fr-FR']('bulldozers_grande_taille')
        ['en-AU']('large_bulldozers')
        ['es-ES']('bulldozers_grandes')
        ['en-GB']('large_bulldozers')
        ['en-NZ']('large_bulldozers')
        ['pt-PT']('large_bulldozers')
        ['en-US']('large_bulldozers')
    )
    .key('large-bulldozers')
    .orderHint('0.000017083829373511975137352');

export default largeBulldozers;
