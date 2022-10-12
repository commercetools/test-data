#!/usr/bin/env bash

set -e

echo "Preparing development setup"

pnpm husky install
# FIXME: https://github.com/Thinkmill/manypkg/issues/147
# pnpm manypkg check
pnpm preconstruct dev
