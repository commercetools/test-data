import { LocalizedStringDraft, KeyReferenceDraft } from '@/models/commons';
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
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Walzen, die pneumatische Kraft für die Verdichtung verwenden')
        [
          'it-IT'
        ]('Rulli che utilizzano la forza pneumatica per la compattazione')
        ['nl-NL']('Walsen die pneumatische kracht gebruiken voor verdichting')
        ['fr-FR']('Rouleaux utilisant la force pneumatique pour le compactage')
        ['en-AU']('Rollers using pneumatic force for compaction')
        ['es-ES']('Rodillos que utilizan fuerza neumática para compactar')
        ['en-GB']('Rollers using pneumatic force for compaction')
        ['en-NZ']('Rollers using pneumatic force for compaction')
        ['pt-PT']('Rolos que utilizam força pneumática para compactação')
        ['en-US']('Rollers using pneumatic force for compaction')
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
    .orderHint('0.00001711364484772490385449')
    .parent(
      KeyReferenceDraft.presets
        .category()
        .key(heavyDutySoilCompactorsRollersCategory.key!)
    );

export default pneumaticRollers;
