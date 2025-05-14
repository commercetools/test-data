import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const alternator3 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('alternator-3')
    .sku('alternator')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(27500))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default alternator3;
