#!/bin/bash
# Regenerates llms.txt and metadata JSONs from current icon sources.
# Called by the pre-commit hook to keep llms.txt in sync with icons.

set -e

cd "$(git rev-parse --show-toplevel)/packages/foamicons"
npx tsx scripts/build-metadata.ts

# Stage the updated llms.txt so it's included in the commit
git add llms.txt
