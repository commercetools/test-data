import { LocalizedStringDraft, KeyReferenceDraft } from '../../../../commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import largeDiameterMiningDrills from './large-diameter-mining-drills';

const largeDiameterMiningDrillsCategory =
  largeDiameterMiningDrills().build<TCategoryDraft>();

const productionDrills = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Produktionsbohrer')
        ['it-IT']('Trapani di Produzione')
        ['nl-NL']('Productieboormachines')
        ['fr-FR']('Forages de production')
        ['en-AU']('Production Drills')
        ['es-ES']('Perforadoras de producción')
        ['en-GB']('Production Drills')
        ['en-NZ']('Production Drills')
        ['pt-PT']('Brocas de Produção')
        ['en-US']('Production Drills')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Bohrer für groß angelegte Produktionsaktivitäten')
        ['it-IT']('Trapani per attività di produzione su larga scala')
        ['nl-NL']('Boormachines voor grootschalige productieactiviteiten')
        ['fr-FR']('Forages pour des activités de production à grande échelle')
        ['en-AU']('Drills for large-scale production activities')
        ['es-ES']('Perforadoras para actividades de producción a gran escala')
        ['en-GB']('Drills for large-scale production activities')
        ['en-NZ']('Drills for large-scale production activities')
        ['pt-PT']('Brocas para atividades de produção em grande escala')
        ['en-US']('Drills for large-scale production activities')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('produktions_bohrer')
        ['it-IT']('production_drills')
        ['nl-NL']('production_drills')
        ['fr-FR']('forages_production')
        ['en-AU']('production_drills')
        ['es-ES']('perforadoras_produccion')
        ['en-GB']('production_drills')
        ['en-NZ']('production_drills')
        ['pt-PT']('production_drills')
        ['en-US']('production_drills')
    )
    .key('production-drills')
    .orderHint('0.00001711364484755764795695')
    .parent(
      KeyReferenceDraft.presets
        .category()
        .key(largeDiameterMiningDrillsCategory.key!)
    );

export default productionDrills;
