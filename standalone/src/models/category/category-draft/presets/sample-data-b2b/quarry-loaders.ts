import { LocalizedStringDraft, KeyReferenceDraft } from '../../../../commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import highCapacityFrontEndLoaders from './high-capacity-front-end-loaders';

const highCapacityFrontEndLoadersCategory =
  highCapacityFrontEndLoaders().build<TCategoryDraft>();

const quarryLoaders = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Steinbruchlader')
        ['it-IT']('Caricatori per Cave')
        ['nl-NL']('Laders voor Steengroeven')
        ['fr-FR']('Chargeuses de carrière')
        ['en-AU']('Quarry Loaders')
        ['es-ES']('Cargadores de cantera')
        ['en-GB']('Quarry Loaders')
        ['en-NZ']('Quarry Loaders')
        ['pt-PT']('Carregadeiras de Pedreira')
        ['en-US']('Quarry Loaders')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Lader, die in Steinbruchoperationen verwendet werden')
        ['it-IT']('Caricatori utilizzati in operazioni di cava')
        ['nl-NL']('Laders gebruikt in steengroeve operaties')
        ['fr-FR']('Chargeuses utilisées dans les opérations de carrière')
        ['en-AU']('Loaders used in quarry operations')
        ['es-ES']('Cargadores utilizados en operaciones de cantera')
        ['en-GB']('Loaders used in quarry operations')
        ['en-NZ']('Loaders used in quarry operations')
        ['pt-PT']('Carregadeiras usadas em operações de pedreira')
        ['en-US']('Loaders used in quarry operations')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('steinbruch_lader')
        ['it-IT']('quarry_loaders')
        ['nl-NL']('quarry_loaders')
        ['fr-FR']('chargeuses_carriere')
        ['en-AU']('quarry_loaders')
        ['es-ES']('cargadores_cantera')
        ['en-GB']('quarry_loaders')
        ['en-NZ']('quarry_loaders')
        ['pt-PT']('quarry_loaders')
        ['en-US']('quarry_loaders')
    )
    .key('quarry-loaders')
    .orderHint('0.000017113644847331158997483')
    .parent(
      KeyReferenceDraft.presets
        .category()
        .key(highCapacityFrontEndLoadersCategory.key!)
    );

export default quarryLoaders;
