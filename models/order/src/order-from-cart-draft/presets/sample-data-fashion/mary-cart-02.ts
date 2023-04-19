import { KeyReference } from '@commercetools-test-data/commons';
import * as OrderFromCartDraft from '../../';
import { constants } from '../../..';
import { TOrderFromCartDraftBuilder } from '../../../types';

const maryCart02 = (): TOrderFromCartDraftBuilder =>
  OrderFromCartDraft.presets
    .empty()
    .version(null!)
    .cart(KeyReference.random().key('mary-02-cart').typeId('cart'))
    .orderState(constants.orderState.Complete);

export default maryCart02;
