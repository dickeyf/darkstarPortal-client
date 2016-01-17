#!/bin/bash
#
# Assumptions : 
#   - Node.js and npm are installed and in PATH
#
npm uninstall -g ember-cli  # Remove old
npm cache clean
npm install -g bower
npm install -g phantomjs
bower cache clean
npm install -g ember-cli@2.2.0-beta.6
