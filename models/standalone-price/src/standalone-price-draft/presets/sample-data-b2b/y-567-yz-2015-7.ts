import { ChannelDraft, TChannelDraft } from '@commercetools-test-data/channel';
import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const channel = ChannelDraft.presets.sampleDataB2B
  .usMediumCustomers()
  .build<TChannelDraft>();
const variant = ProductVariantDraft.presets.sampleDataB2B
  .y567Yz01()
  .build<TProductVariantDraft>();

const y567Yz20157 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('y567-yz-2015-7')
    .sku(variant.sku!)
    .value(MoneyDraft.random().currencyCode('USD').centAmount(2760000))
    .country('US')
    .channel(KeyReferenceDraft.presets.channel().key(channel.key!))
    .active(true);

export default y567Yz20157;
