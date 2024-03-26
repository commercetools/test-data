import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import heavyDutyConstructionCranes from './heavy-duty-construction-cranes';

const heavyDutyConstructionCranesCategory =
  heavyDutyConstructionCranes().build<TCategoryDraft>();

const crawlerCranes = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Raupenkräne')
        ['it-IT']('Gru Cingolate')
        ['nl-NL']('Rupskranen')
        ['fr-FR']('Grues sur chenilles')
        ['en-AU']('Crawler Cranes')
        ['es-ES']('Gruas de orugas')
        ['en-GB']('Crawler Cranes')
        ['en-NZ']('Crawler Cranes')
        ['pt-PT']('Guindastes de Esteira')
        ['en-US']('Crawler Cranes')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Kräne mit Raupenketten für Stabilität')
        ['it-IT']('Gru con cingoli per stabilità')
        ['nl-NL']('Kranen met rupssporen voor stabiliteit')
        ['fr-FR']('Grues avec des chenilles pour la stabilité')
        ['en-AU']('Cranes with crawler tracks for stability')
        ['es-ES']('Gruas con orugas para estabilidad')
        ['en-GB']('Cranes with crawler tracks for stability')
        ['en-NZ']('Cranes with crawler tracks for stability')
        ['pt-PT']('Guindastes com esteiras para estabilidade')
        ['en-US']('Cranes with crawler tracks for stability')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('raupen_kraene')
        ['it-IT']('crawler_cranes')
        ['nl-NL']('crawler_cranes')
        ['fr-FR']('grues_sur_chenilles')
        ['en-AU']('crawler_cranes')
        ['es-ES']('gruas_orugas')
        ['en-GB']('crawler_cranes')
        ['en-NZ']('crawler_cranes')
        ['pt-PT']('crawler_cranes')
        ['en-US']('crawler_cranes')
    )
    .key('crawler-cranes')
    .orderHint('0.000017113644847751996610372')
    .parent(
      KeyReferenceDraft.presets
        .category()
        .key(heavyDutyConstructionCranesCategory.key!)
    );

export default crawlerCranes;
