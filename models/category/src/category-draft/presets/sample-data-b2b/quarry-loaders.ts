import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import highCapacityFrontEndLoaders from './high-capacity-front-end-loaders';

const highCapacityFrontEndLoadersCategory =
  highCapacityFrontEndLoaders().build<TCategoryDraft>();

const quarryLoaders = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Steinbruchlader')
        ['it-IT']('Caricatori per Cave')
        ['nl-NL']('Laders voor Steengroeven')
        ['fr-FR']('Chargeuses de carrière')
        ['en-AU']('Quarry Loaders')
        ['es-ES']('Cargadores de cantera')
        ['en-GB']('Quarry Loaders')
        ['en-NZ']('Quarry Loaders')
        ['pt-PT']('Carregadeiras de Pedreira')
        ['en-US']('Quarry Loaders')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('steinbruch_lader')
        ['it-IT']('quarry_loaders')
        ['nl-NL']('quarry_loaders')
        ['fr-FR']('chargeuses_carriere')
        ['en-AU']('quarry_loaders')
        ['es-ES']('cargadores_cantera')
        ['en-GB']('quarry_loaders')
        ['en-NZ']('quarry_loaders')
        ['pt-PT']('quarry_loaders')
        ['en-US']('quarry_loaders')
    )
    .key('quarry-loaders')
    .orderHint('0.00001708382942908348001125')
    .parent(
      KeyReferenceDraft.presets
        .category()
        .key(highCapacityFrontEndLoadersCategory.key!)
    );

export default quarryLoaders;
