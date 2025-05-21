import { CartDraft } from '../../../../../cart';
import type { TCartDraft } from '../../../../../cart';
import { KeyReferenceDraft } from '../../../../commons';
import { constants } from '../../../index';
import { TOrderFromCartDraftBuilder } from '../../../types';
import * as OrderFromCartDraft from '../../index';

const cart = CartDraft.presets.sampleDataFashion
  .sampleGermany02()
  .build<TCartDraft>();

const sampleGermanyCart02 = (
  versionNumber: number
): TOrderFromCartDraftBuilder =>
  OrderFromCartDraft.presets
    .empty()
    .version(versionNumber)
    .cart(KeyReferenceDraft.random().key(cart.key!).typeId('cart'))
    .orderState(constants.orderState.Complete);

export default sampleGermanyCart02;
