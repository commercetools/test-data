import { KeyReference } from '@commercetools-test-data/commons';
import * as OrderFromCartDraft from '../../';
import { constants } from '../../..';
import { TOrderFromCartDraftBuilder } from '../../../types';

const maryCart02 = (): TOrderFromCartDraftBuilder =>
  OrderFromCartDraft.presets
    .empty()
    .version(null!)
    // TODO: use the key from the cart model presets when available
    .cart(KeyReference.random().key('mary-02-cart').typeId('cart'))
    .orderState(constants.orderState.Complete);

export default maryCart02;
