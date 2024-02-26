import { LocalizedStringDraft } from '@commercetools-test-data/commons';
import {
  CartDiscountShippingCostTargetDraft,
  CartDiscountValueRelativeDraft,
} from '../../../../index';
import { stackingMode } from '../../../constants';
import type { TCartDiscountDraftBuilder } from '../../../types';
import * as CartDiscountDraft from '../../index';

const freeShip50000Gbp = (): TCartDiscountDraftBuilder =>
  CartDiscountDraft.presets
    .empty()
    .key('free-ship-50000-gbp')
    .value(CartDiscountValueRelativeDraft.random().permyriad(10000))
    .target(CartDiscountShippingCostTargetDraft.random())
    .cartPredicate(`totalPrice >= "50000 GBP"`)
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Kostenloser Versand ab einem Einkauf von 50000 GBP')
        ['it-IT']('Spedizione gratuita per acquisti di almeno 50000 GBP')
        ['nl-NL']('Gratis verzending bij besteding van 50000 GBP')
        ['fr-FR']('Livraison gratuite à partir de 50000 GBP d&#39;achat')
        ['en-AU']('Free Shipping when you spend 50000 GBP')
        ['es-ES']('Envío gratuito al gastar 50000 GBP')
        ['en-GB']('Free Shipping when you spend 50000 GBP')
        ['en-NZ']('Free Shipping when you spend 50000 GBP')
        ['pt-PT']('Envio grátis ao gastar 50000 GBP')
        ['en-US']('Free Shipping when you spend 50000 GBP')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE'](
          'Kostenloser Versand bei einer Bestellung von mindestens 50000 GBP'
        )
        ['it-IT']('Spedizione gratuita per ordini di almeno 50000 GBP')
        ['nl-NL'](
          'Gratis verzending bij een bestelling van ten minste 50000 GBP'
        )
        ['fr-FR'](
          'Livraison gratuite pour toute commande d&#39;au moins 50000 GBP'
        )
        ['en-AU']('Free shipping when your order is at least 50000 GBP')
        ['es-ES']('Envío gratuito en pedidos de al menos 50000 GBP')
        ['en-GB']('Free shipping when your order is at least 50000 GBP')
        ['en-NZ']('Free shipping when your order is at least 50000 GBP')
        ['pt-PT']('Envio grátis em encomendas de pelo menos 50000 GBP')
        ['en-US']('Free shipping when your order is at least 50000 GBP')
    )
    .stackingMode(stackingMode.Stacking)
    .isActive(true)
    .requiresDiscountCode(false)
    .sortOrder('0.22');

export default freeShip50000Gbp;
