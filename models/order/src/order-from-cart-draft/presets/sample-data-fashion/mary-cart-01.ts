import { KeyReference } from '@commercetools-test-data/commons';
import * as OrderFromCartDraft from '../../';
import { constants } from '../../..';
import { TOrderFromCartDraftBuilder } from '../../../types';

const maryCart01 = (): TOrderFromCartDraftBuilder =>
  OrderFromCartDraft.presets
    .empty()
    .version(null!)
    .cart(KeyReference.random().key('mary-01-cart').typeId('cart'))
    .orderState(constants.orderState.Cancelled);

export default maryCart01;
