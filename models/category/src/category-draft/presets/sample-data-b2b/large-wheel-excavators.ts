import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
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
    .orderHint('0.00001708382941289446240444')
    .parent(KeyReferenceDraft.presets.category().key(excavatorsCategory.key!));

export default largeWheelExcavators;
