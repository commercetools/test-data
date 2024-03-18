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
  .defaultChannel()
  .build<TChannelDraft>();
const variant = ProductVariantDraft.presets.sampleDataB2B
  .pneumaticTire01()
  .build<TProductVariantDraft>();

const pneumaticTire1 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('pneumatic-tire-1')
    .sku(variant.sku!)
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(50000))
    .channel(KeyReferenceDraft.presets.channel().key(channel.key!))
    .active(true);

export default pneumaticTire1;
