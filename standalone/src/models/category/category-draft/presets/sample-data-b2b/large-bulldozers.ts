import { LocalizedStringDraft } from '@/models/commons';
import type { TCategoryDraftBuilder } from '../../../types';
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
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Bulldozer im Großraumbagger- und Baubereich')
        ['it-IT']('Bulldozer per movimento terra e costruzioni su larga scala')
        ['nl-NL']('Bulldozers in grootschalige grondverzet- en bouwprojecten')
        [
          'fr-FR'
        ]('Bulldozers pour les travaux de terrassement et de construction à grande échelle')
        ['en-AU']('Bulldozers in large-scale earthmoving and construction')
        [
          'es-ES'
        ]('Bulldozers en movimiento de tierras y construcción a gran escala')
        ['en-GB']('Bulldozers in large-scale earthmoving and construction')
        ['en-NZ']('Bulldozers in large-scale earthmoving and construction')
        [
          'pt-PT'
        ]('Bulldozers em movimentação de terra e construção de grande escala')
        ['en-US']('Bulldozers in large-scale earthmoving and construction')
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
    .orderHint('0.000017113644845311689458124');

export default largeBulldozers;
