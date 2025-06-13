import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../../commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import largeBulldozers from './large-bulldozers';

const largeBulldozersCategory = largeBulldozers().build<TCategoryDraft>();

const swampBulldozers = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Sumpf-Bulldozer')
        ['it-IT']('Bulldozer per Paludi')
        ['nl-NL']('Moeras Bulldozers')
        ['fr-FR']('Bulldozers pour les zones marécageuses')
        ['en-AU']('Swamp Bulldozers')
        ['es-ES']('Bulldozers de pantano')
        ['en-GB']('Swamp Bulldozers')
        ['en-NZ']('Swamp Bulldozers')
        ['pt-PT']('Bulldozers para Pântano')
        ['en-US']('Swamp Bulldozers')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Bulldozer, die für sumpfiges Gelände geeignet sind')
        ['it-IT']('Bulldozer adatti per terreni paludosi')
        ['nl-NL']('Bulldozers geschikt voor moerassig terrein')
        ['fr-FR']('Bulldozers adaptés aux terrains marécageux')
        ['en-AU']('Bulldozers suitable for swampy terrain')
        ['es-ES']('Bulldozers adecuados para terrenos pantanosos')
        ['en-GB']('Bulldozers suitable for swampy terrain')
        ['en-NZ']('Bulldozers suitable for swampy terrain')
        ['pt-PT']('Bulldozers adequados para terrenos pantanosos')
        ['en-US']('Bulldozers suitable for swampy terrain')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('sumpf_bulldozer')
        ['it-IT']('swamp_bulldozers')
        ['nl-NL']('swamp_bulldozers')
        ['fr-FR']('bulldozers_zones_marecageuses')
        ['en-AU']('swamp_bulldozers')
        ['es-ES']('bulldozers_pantano')
        ['en-GB']('swamp_bulldozers')
        ['en-NZ']('swamp_bulldozers')
        ['pt-PT']('swamp_bulldozers')
        ['en-US']('swamp_bulldozers')
    )
    .key('swamp-bulldozers')
    .orderHint('0.00001711364484756242783265')
    .parent(
      KeyReferenceDraft.presets.category().key(largeBulldozersCategory.key!)
    );

export default swampBulldozers;
