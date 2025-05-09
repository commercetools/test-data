import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import excavators from './excavators';

const excavatorsCategory = excavators().build<TCategoryDraft>();

const largeWheelExcavators = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Großradbagger')
        ['it-IT']('Escavatori su Ruote')
        ['nl-NL']('Graafmachines op Wielen')
        ['fr-FR']('Excavatrices à roues')
        ['en-AU']('Wheeled Excavators')
        ['es-ES']('Excavadoras de ruedas')
        ['en-GB']('Wheeled Excavators')
        ['en-NZ']('Wheeled Excavators')
        ['pt-PT']('Escavadeiras com Rodas')
        ['en-US']('Wheeled Excavators')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Radbagger für anspruchsvolle Anwendungen')
        ['it-IT']('Escavatori su ruote per applicazioni pesanti')
        ['nl-NL']('Wielladers voor zware toepassingen')
        ['fr-FR']('Excavatrices à roues pour des applications intensives')
        ['en-AU']('Wheel excavators for heavy-duty applications')
        ['es-ES']('Excavadoras de ruedas para aplicaciones de servicio pesado')
        ['en-GB']('Wheel excavators for heavy-duty applications')
        ['en-NZ']('Wheel excavators for heavy-duty applications')
        ['pt-PT']('Escavadeiras com rodas para aplicações pesadas')
        ['en-US']('Wheel excavators for heavy-duty applications')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('grossradbagger')
        ['it-IT']('wheeled_excavators')
        ['nl-NL']('wheeled_excavators')
        ['fr-FR']('excavatrices_roues')
        ['en-AU']('wheeled_excavators')
        ['es-ES']('excavadoras_ruedas')
        ['en-GB']('wheeled_excavators')
        ['en-NZ']('wheeled_excavators')
        ['pt-PT']('wheeled_excavators')
        ['en-US']('wheeled_excavators')
    )
    .key('large-wheel-excavators')
    .orderHint('0.000017113644847261484295299')
    .parent(KeyReferenceDraft.presets.category().key(excavatorsCategory.key!));

export default largeWheelExcavators;
