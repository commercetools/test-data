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
  .e567Yz03()
  .build<TProductVariantDraft>();

const e567Yz20232 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('e567-yz-2023-2')
    .sku(variant.sku!)
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(1331000))
    .channel(KeyReferenceDraft.presets.channel().key(channel.key!))
    .active(true);

export default e567Yz20232;
