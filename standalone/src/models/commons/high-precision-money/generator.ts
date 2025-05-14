import { fake, Generator, oneOf } from '@/core';
import { THighPrecisionMoney } from './types';

// https://docs.commercetools.com/api/types#highprecisionmoney

const CENT_PRECISION_FRACTION_DIGITS = 2;

const generator = Generator<THighPrecisionMoney>({
  fields: {
    type: 'highPrecision',
    centAmount: 1,
    currencyCode: oneOf('EUR', 'USD'),
    fractionDigits: fake((f) => f.number.int({ min: 3, max: 10 })),
    preciseAmount: fake((f) => f.number.int({ min: 1, max: 9999999999 })),
  },
  postBuild: (highPrecision: THighPrecisionMoney) => {
    const centAmount = Math.round(
      highPrecision.preciseAmount /
        10 ** (highPrecision.fractionDigits - CENT_PRECISION_FRACTION_DIGITS)
    );
    return { ...highPrecision, centAmount };
  },
});

export default generator;
