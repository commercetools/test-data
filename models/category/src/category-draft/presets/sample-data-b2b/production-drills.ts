import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
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
    .orderHint('0.00001708382950186609251987')
    .parent(
      KeyReferenceDraft.presets
        .category()
        .key(largeDiameterMiningDrillsCategory.key!)
    );

export default productionDrills;
