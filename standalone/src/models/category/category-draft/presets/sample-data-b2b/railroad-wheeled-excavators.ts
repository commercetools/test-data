import { LocalizedStringDraft, KeyReferenceDraft } from '@/models/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import largeWheelExcavators from './large-wheel-excavators';

const largeWheelExcavatorsCategory =
  largeWheelExcavators().build<TCategoryDraft>();

const railroadWheeledExcavators = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Schienen-Radbagger')
        ['it-IT']('Escavatori su Ruote per Ferrovie')
        ['nl-NL']('Spoorweg Graafmachines op Wielen')
        ['fr-FR']('Excavatrices à roues pour les voies ferrées')
        ['en-AU']('Railroad Wheeled Excavators')
        ['es-ES']('Excavadoras de ruedas para ferrocarriles')
        ['en-GB']('Railroad Wheeled Excavators')
        ['en-NZ']('Railroad Wheeled Excavators')
        ['pt-PT']('Escavadeiras com Rodas para Ferrovias')
        ['en-US']('Railroad Wheeled Excavators')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Radbagger, die für den Bau von Eisenbahnen geeignet sind')
        ['it-IT']('Escavatori su ruote adatti per la costruzione ferroviaria')
        ['nl-NL']('Wielladers geschikt voor spoorwegbouw')
        [
          'fr-FR'
        ]('Excavatrices à roues adaptées à la construction de voies ferrées')
        ['en-AU']('Wheel excavators suitable for railroad construction')
        [
          'es-ES'
        ]('Excavadoras de ruedas adecuadas para la construcción de ferrocarriles')
        ['en-GB']('Wheel excavators suitable for railroad construction')
        ['en-NZ']('Wheel excavators suitable for railroad construction')
        [
          'pt-PT'
        ]('Escavadeiras com rodas adequadas para construção ferroviária')
        ['en-US']('Wheel excavators suitable for railroad construction')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('schienen_radbagger')
        ['it-IT']('railroad_wheeled_excavators')
        ['nl-NL']('railroad_wheeled_excavators')
        ['fr-FR']('excavatrices_roues_ferrovieres')
        ['en-AU']('railroad_wheeled_excavators')
        ['es-ES']('excavadoras_ruedas_ferrocarriles')
        ['en-GB']('railroad_wheeled_excavators')
        ['en-NZ']('railroad_wheeled_excavators')
        ['pt-PT']('railroad_wheeled_excavators')
        ['en-US']('railroad_wheeled_excavators')
    )
    .key('railroad-wheeled-excavators')
    .orderHint('0.000017113644849581664545650')
    .parent(
      KeyReferenceDraft.presets
        .category()
        .key(largeWheelExcavatorsCategory.key!)
    );

export default railroadWheeledExcavators;
