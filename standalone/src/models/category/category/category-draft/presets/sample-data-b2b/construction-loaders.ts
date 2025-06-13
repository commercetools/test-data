import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../../commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import highCapacityFrontEndLoaders from './high-capacity-front-end-loaders';

const highCapacityFrontEndLoadersCategory =
  highCapacityFrontEndLoaders().build<TCategoryDraft>();

const constructionLoaders = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Baustellenlader')
        ['it-IT']('Caricatori da Costruzione')
        ['nl-NL']('Bouwladers')
        ['fr-FR']('Chargeuses de construction')
        ['en-AU']('Construction Loaders')
        ['es-ES']('Cargadores de construcción')
        ['en-GB']('Construction Loaders')
        ['en-NZ']('Construction Loaders')
        ['pt-PT']('Carregadeiras de Construção')
        ['en-US']('Construction Loaders')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Lader, die für Bauaufgaben konzipiert sind')
        ['it-IT']('Caricatori progettati per compiti di costruzione')
        ['nl-NL']('Laders ontworpen voor bouwtaken')
        ['fr-FR']('Chargeuses conçues pour les tâches de construction')
        ['en-AU']('Loaders designed for construction tasks')
        ['es-ES']('Cargadores diseñados para tareas de construcción')
        ['en-GB']('Loaders designed for construction tasks')
        ['en-NZ']('Loaders designed for construction tasks')
        ['pt-PT']('Carregadeiras projetadas para tarefas de construção')
        ['en-US']('Loaders designed for construction tasks')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('bau_lader')
        ['it-IT']('construction_loaders')
        ['nl-NL']('construction_loaders')
        ['fr-FR']('chargeuses_construction')
        ['en-AU']('construction_loaders')
        ['es-ES']('cargadores_construccion')
        ['en-GB']('construction_loaders')
        ['en-NZ']('construction_loaders')
        ['pt-PT']('construction_loaders')
        ['en-US']('construction_loaders')
    )
    .key('construction-loaders')
    .orderHint('0.0000171136448475727245821')
    .parent(
      KeyReferenceDraft.presets
        .category()
        .key(highCapacityFrontEndLoadersCategory.key!)
    );

export default constructionLoaders;
