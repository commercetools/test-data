import { CartDraft } from '@commercetools-test-data/cart';
import type { TCartDraft } from '@commercetools-test-data/cart';
import { KeyReference } from '@commercetools-test-data/commons';
import { constants } from '../../../index';
import { TOrderFromCartDraftBuilder } from '../../../types';
import * as OrderFromCartDraft from '../../index';

const maryCartDraft01 = CartDraft.presets.sampleDataFashion
  .marySmith01()
  .build<TCartDraft>();

const maryCart01 = (versionNumber: number): TOrderFromCartDraftBuilder =>
  OrderFromCartDraft.presets
    .empty()
    .version(versionNumber)
    .cart(KeyReference.random().key(maryCartDraft01.key!).typeId('cart'))
    .orderState(constants.orderState.Cancelled);

export default maryCart01;
