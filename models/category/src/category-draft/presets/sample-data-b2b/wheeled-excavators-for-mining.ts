import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import largeWheelExcavators from './large-wheel-excavators';

const largeWheelExcavatorsCategory =
  largeWheelExcavators().build<TCategoryDraft>();

const wheeledExcavatorsForMining = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Radbagger für den Bergbau')
        ['it-IT']('Escavatori su Ruote per Miniere')
        ['nl-NL']('Graafmachines op Wielen voor Mijnbouw')
        ['fr-FR']("Excavatrices à roues pour l'exploitation minière")
        ['en-AU']('Wheeled Excavators for Mining')
        ['es-ES']('Excavadoras de ruedas para minería')
        ['en-GB']('Wheeled Excavators for Mining')
        ['en-NZ']('Wheeled Excavators for Mining')
        ['pt-PT']('Escavadeiras com Rodas para Mineração')
        ['en-US']('Wheeled Excavators for Mining')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('radbagger_fuer_bergbau')
        ['it-IT']('wheeled_excavators_for_mining')
        ['nl-NL']('wheeled_excavators_for_mining')
        ['fr-FR']('excavatrices_roues_mining')
        ['en-AU']('wheeled_excavators_for_mining')
        ['es-ES']('excavadoras_ruedas_mineria')
        ['en-GB']('wheeled_excavators_for_mining')
        ['en-NZ']('wheeled_excavators_for_mining')
        ['pt-PT']('wheeled_excavators_for_mining')
        ['en-US']('wheeled_excavators_for_mining')
    )
    .key('wheeled-excavators-for-mining')
    .orderHint('0.00001708382942192468814460')
    .parent(
      KeyReferenceDraft.presets
        .category()
        .key(largeWheelExcavatorsCategory.key!)
    );

export default wheeledExcavatorsForMining;
