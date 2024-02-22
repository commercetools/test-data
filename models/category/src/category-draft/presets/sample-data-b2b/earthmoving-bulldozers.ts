import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import largeBulldozers from './large-bulldozers';

const largeBulldozersCategory = largeBulldozers().build<TCategoryDraft>();

const earthmovingBulldozers = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Erdbewegungsbagger')
        ['it-IT']('Bulldozer per Movimento Terra')
        ['nl-NL']('Grondverzet Bulldozers')
        ['fr-FR']('Bulldozers de terrassement')
        ['en-AU']('Earthmoving Bulldozers')
        ['es-ES']('Bulldozers de movimiento de tierras')
        ['en-GB']('Earthmoving Bulldozers')
        ['en-NZ']('Earthmoving Bulldozers')
        ['pt-PT']('Bulldozers para Movimentação de Terra')
        ['en-US']('Earthmoving Bulldozers')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('erdbewegungsbagger_bulldozer')
        ['it-IT']('earthmoving_bulldozers')
        ['nl-NL']('earthmoving_bulldozers')
        ['fr-FR']('bulldozers_terrassement')
        ['en-AU']('earthmoving_bulldozers')
        ['es-ES']('bulldozers_movimiento_tierras')
        ['en-GB']('earthmoving_bulldozers')
        ['en-NZ']('earthmoving_bulldozers')
        ['pt-PT']('earthmoving_bulldozers')
        ['en-US']('earthmoving_bulldozers')
    )
    .key('earthmoving-bulldozers')
    .orderHint('0.00001708382944022671730669')
    .parent(
      KeyReferenceDraft.presets.category().key(largeBulldozersCategory.key!)
    );

export default earthmovingBulldozers;
