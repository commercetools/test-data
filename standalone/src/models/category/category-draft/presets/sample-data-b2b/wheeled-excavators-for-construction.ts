import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import largeWheelExcavators from './large-wheel-excavators';

const largeWheelExcavatorsCategory =
  largeWheelExcavators().build<TCategoryDraft>();

const wheeledExcavatorsForConstruction = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Radbagger für den Bau')
        ['it-IT']('Escavatori su Ruote per la Costruzione')
        ['nl-NL']('Graafmachines op Wielen voor Bouw')
        ['fr-FR']('Excavatrices à roues pour la construction')
        ['en-AU']('Wheeled Excavators for Construction')
        ['es-ES']('Excavadoras de ruedas para construcción')
        ['en-GB']('Wheeled Excavators for Construction')
        ['en-NZ']('Wheeled Excavators for Construction')
        ['pt-PT']('Escavadeiras com Rodas para Construção')
        ['en-US']('Wheeled Excavators for Construction')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Radbagger, die für Bauaufgaben geeignet sind')
        ['it-IT']('Escavatori su ruote adatti per compiti di costruzione')
        ['nl-NL']('Wielladers geschikt voor bouwtaken')
        ['fr-FR']('Excavatrices à roues adaptées aux tâches de construction')
        ['en-AU']('Wheel excavators suitable for construction tasks')
        ['es-ES']('Excavadoras de ruedas adecuadas para tareas de construcción')
        ['en-GB']('Wheel excavators suitable for construction tasks')
        ['en-NZ']('Wheel excavators suitable for construction tasks')
        ['pt-PT']('Escavadeiras com rodas adequadas para tarefas de construção')
        ['en-US']('Wheel excavators suitable for construction tasks')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('radbagger_fuer_bau')
        ['it-IT']('wheeled_excavators_for_construction')
        ['nl-NL']('wheeled_excavators_for_construction')
        ['fr-FR']('excavatrices_roues_construction')
        ['en-AU']('wheeled_excavators_for_construction')
        ['es-ES']('excavadoras_ruedas_construccion')
        ['en-GB']('wheeled_excavators_for_construction')
        ['en-NZ']('wheeled_excavators_for_construction')
        ['pt-PT']('wheeled_excavators_for_construction')
        ['en-US']('wheeled_excavators_for_construction')
    )
    .key('wheeled-excavators-for-construction')
    .orderHint('0.00001711364484938846724481')
    .parent(
      KeyReferenceDraft.presets
        .category()
        .key(largeWheelExcavatorsCategory.key!)
    );

export default wheeledExcavatorsForConstruction;
