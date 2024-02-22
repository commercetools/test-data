import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import heavyDutyConstructionCranes from './heavy-duty-construction-cranes';

const heavyDutyConstructionCranesCategory =
  heavyDutyConstructionCranes().build<TCategoryDraft>();

const mobileCranes = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Mobile Kräne')
        ['it-IT']('Gru Mobili')
        ['nl-NL']('Mobiele Kranen')
        ['fr-FR']('Grues mobiles')
        ['en-AU']('Mobile Cranes')
        ['es-ES']('Gruas móviles')
        ['en-GB']('Mobile Cranes')
        ['en-NZ']('Mobile Cranes')
        ['pt-PT']('Guindastes Móveis')
        ['en-US']('Mobile Cranes')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('mobile_kraene')
        ['it-IT']('mobile_cranes')
        ['nl-NL']('mobile_cranes')
        ['fr-FR']('grues_mobiles')
        ['en-AU']('mobile_cranes')
        ['es-ES']('gruas_moviles')
        ['en-GB']('mobile_cranes')
        ['en-NZ']('mobile_cranes')
        ['pt-PT']('mobile_cranes')
        ['en-US']('mobile_cranes')
    )
    .key('mobile-cranes')
    .orderHint('0.000017083829487202030641779')
    .parent(
      KeyReferenceDraft.presets
        .category()
        .key(heavyDutyConstructionCranesCategory.key!)
    );

export default mobileCranes;
