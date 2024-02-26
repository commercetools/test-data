import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
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
    .orderHint('0.000017083829418582110848053')
    .parent(
      KeyReferenceDraft.presets
        .category()
        .key(largeWheelExcavatorsCategory.key!)
    );

export default wheeledExcavatorsForConstruction;
