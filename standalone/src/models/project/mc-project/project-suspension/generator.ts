import { fake, Generator } from '../../../../core';
import { TProjectSuspension } from './types';

const generator = Generator<TProjectSuspension>({
  fields: {
    isActive: fake(() => false),
    reason: null,
  },
});

export default generator;
