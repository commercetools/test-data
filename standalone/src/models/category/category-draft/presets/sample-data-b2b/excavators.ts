import { LocalizedStringDraft } from '../../../../commons';
import type { TCategoryDraftBuilder } from '../../../types';
import empty from '../empty';

const excavators = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Bagger')
        ['it-IT']('Escavatori')
        ['nl-NL']('Graafmachines')
        ['fr-FR']('Excavatrices')
        ['en-AU']('Excavators')
        ['es-ES']('Excavadoras')
        ['en-GB']('Excavators')
        ['en-NZ']('Excavators')
        ['pt-PT']('Escavadeiras')
        ['en-US']('Excavators')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Bagger für den Einsatz in groß angelegten Betrieb')
        ['it-IT']('Escavatori utilizzati in operazioni su larga scala')
        ['nl-NL']('Graafmachines gebruikt in grootschalige operaties')
        ['fr-FR']('Excavatrices utilisées dans les opérations à grande échelle')
        ['en-AU']('Excavators used in large-scale operations')
        ['es-ES']('Excavadoras utilizadas en operaciones a gran escala')
        ['en-GB']('Excavators used in large-scale operations')
        ['en-NZ']('Excavators used in large-scale operations')
        ['pt-PT']('Escavadeiras usadas em operações de grande escala')
        ['en-US']('Excavators used in large-scale operations')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('bagger')
        ['it-IT']('excavators')
        ['nl-NL']('excavators')
        ['fr-FR']('excavatrices')
        ['en-AU']('excavators')
        ['es-ES']('excavadoras')
        ['en-GB']('excavators')
        ['en-NZ']('excavators')
        ['pt-PT']('excavators')
        ['en-US']('excavators')
    )
    .key('excavators')
    .orderHint('0.0000171136448452649936338');

export default excavators;
