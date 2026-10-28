#!/usr/bin/env bash
# Usage: ./scripts/new-day.sh <>
set -e
TOPIC="${1:?Usage: ./scripts/new-day.sh \"Topic title\"}"

LAST=$(ls -d blog/*-day-* 2>/dev/null | sed -E 's/.*-day-0*([0-9]+)$/\1/' | sort -n | tail -1)
N=$(( ${LAST:-0} + 1 ))
NUM=$(printf "%03d" "$N")
DATE=$(date +%F)
DIR="blog/${DATE}-day-${NUM}"

mkdir -p "$DIR"
CONTENT=$(cat templates/day.mdx)
CONTENT="${CONTENT//__DAY__/$N}"
CONTENT="${CONTENT//__DATE__/$DATE}"
CONTENT="${CONTENT//__TOPIC__/$TOPIC}"
printf "%s\n" "$CONTENT" > "$DIR/index.mdx"

echo "Created $DIR/index.mdx"