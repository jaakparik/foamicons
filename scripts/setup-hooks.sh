#!/bin/bash
# Sets up git hooks for the foamicons monorepo.
# Called automatically via `pnpm install` (prepare script).

set -e

ROOT="$(git rev-parse --show-toplevel 2>/dev/null)" || exit 0

HOOK="$ROOT/.git/hooks/pre-commit"

cat > "$HOOK" << 'EOF'
#!/bin/bash
# Pre-commit hook: update llms.txt with current icon list
# This ensures AI tools always see the latest icon names.

set -e

ROOT="$(git rev-parse --show-toplevel)"

# Only run if icon-related files are staged
if git diff --cached --name-only | grep -qE '(^icons/|aliases\.json|build-icons\.ts|build-metadata\.ts)'; then
  echo "Icons changed — updating llms.txt..."
  bash "$ROOT/scripts/update-llms.sh"
fi
EOF

chmod +x "$HOOK"
echo "Git hooks installed."
