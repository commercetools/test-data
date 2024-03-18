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
  .vv234Wx02()
  .build<TProductVariantDraft>();

const vv234WxBlue2 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('vv234-wx-blue-2')
    .sku(variant.sku!)
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(4400000))
    .channel(KeyReferenceDraft.presets.channel().key(channel.key!))
    .active(true);

export default vv234WxBlue2;
