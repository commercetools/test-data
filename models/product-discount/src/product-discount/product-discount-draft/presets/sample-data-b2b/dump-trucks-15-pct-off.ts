import {
  CategoryDraft,
  type TCategoryDraft,
} from '@commercetools-test-data/category';
import { LocalizedStringDraft } from '@commercetools-test-data/commons';
import { ProductDiscountValueRelativeDraft } from '../../../../index';
import type { TProductDiscountDraftBuilder } from '../../../types';
import * as ProductDiscountDraft from '../../index';

const category = CategoryDraft.presets.sampleDataB2B
  .dumpTrucks()
  .build<TCategoryDraft>();

const dumpTrucks15PctOff = (): TProductDiscountDraftBuilder =>
  ProductDiscountDraft.presets
    .empty()
    .key('dump-trucks-15-pct-off')
    .value(ProductDiscountValueRelativeDraft.random().permyriad(1500))
    .predicate(`categoriesWithAncestors.key contains "${category.key}"`)
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('15% Rabatt auf alle Kipplaster')
        ['it-IT']('15% di sconto su tutti i camion ribaltabili')
        ['nl-NL']('15% korting op alle kiepwagens')
        ['fr-FR']('15% de réduction sur tous les camions à benne')
        ['en-AU']('15% off on all dump trucks')
        ['es-ES']('15% de descuento en todos los camiones de volteo')
        ['en-GB']('15% off on all dump trucks')
        ['en-NZ']('15% off on all dump trucks')
        ['pt-PT']('15% de desconto em todos os camiões de caixa basculante')
        ['en-US']('15% off on all dump trucks')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('15% Rabatt auf alle Kipplaster')
        ['it-IT']('15% di sconto su tutti i camion ribaltabili')
        ['nl-NL']('15% korting op alle kiepwagens')
        ['fr-FR']('15% de réduction sur tous les camions à benne')
        ['en-AU']('15% off on all dump trucks')
        ['es-ES']('15% de descuento en todos los camiones de volteo')
        ['en-GB']('15% off on all dump trucks')
        ['en-NZ']('15% off on all dump trucks')
        ['pt-PT']('15% de desconto em todos os camiões de caixa basculante')
        ['en-US']('15% off on all dump trucks')
    )
    .isActive(true)
    .sortOrder('0.67');

export default dumpTrucks15PctOff;
