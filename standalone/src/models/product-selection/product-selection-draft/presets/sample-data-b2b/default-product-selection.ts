import { LocalizedStringDraft } from '../../../../commons';
import type { TProductSelectionDraftBuilder } from '../../../types';
import * as ProductSelectionDraft from '../../index';

const defaultProductSelection = (): TProductSelectionDraftBuilder =>
  ProductSelectionDraft.presets
    .empty()
    .key('default-product-selection')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Standard')
        ['it-IT']('Predefinito')
        ['nl-NL']('Standaard')
        ['fr-FR']('Défaut')
        ['en-AU']('Default')
        ['es-ES']('Predeterminado')
        ['en-GB']('Default')
        ['en-NZ']('Default')
        ['pt-PT']('Padrão')
        ['en-US']('Default')
    )
    .mode('Individual');

export default defaultProductSelection;
