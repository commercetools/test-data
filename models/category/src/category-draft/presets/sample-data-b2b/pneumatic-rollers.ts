import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import heavyDutySoilCompactorsRollers from './heavy-duty-soil-compactors-rollers';

const heavyDutySoilCompactorsRollersCategory =
  heavyDutySoilCompactorsRollers().build<TCategoryDraft>();

const pneumaticRollers = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Pneumatische Walzen')
        ['it-IT']('Rulli Pneumatici')
        ['nl-NL']('Pneumatische Walsen')
        ['fr-FR']('Rouleaux pneumatiques')
        ['en-AU']('Pneumatic Rollers')
        ['es-ES']('Rodillos neumáticos')
        ['en-GB']('Pneumatic Rollers')
        ['en-NZ']('Pneumatic Rollers')
        ['pt-PT']('Rolos Pneumáticos')
        ['en-US']('Pneumatic Rollers')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('pneumatische_walzen')
        ['it-IT']('pneumatic_rollers')
        ['nl-NL']('pneumatic_rollers')
        ['fr-FR']('rouleaux_pneumatiques')
        ['en-AU']('pneumatic_rollers')
        ['es-ES']('rodillos_neumaticos')
        ['en-GB']('pneumatic_rollers')
        ['en-NZ']('pneumatic_rollers')
        ['pt-PT']('pneumatic_rollers')
        ['en-US']('pneumatic_rollers')
    )
    .key('pneumatic-rollers')
    .orderHint('0.00001708382947601996147782')
    .parent(
      KeyReferenceDraft.presets
        .category()
        .key(heavyDutySoilCompactorsRollersCategory.key!)
    );

export default pneumaticRollers;
