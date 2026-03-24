#!/bin/bash
cd "$(dirname "$0")"
git pull upstream main
npm run start
