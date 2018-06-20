#!/bin/bash

# Change to current directory
cd "$(dirname "$0")"

# Define a timestamp function
timestamp() {
  date +"%Y-%m-%d_%T"
}

# Create filename
filename="../db/"$(timestamp)".sql"

# Go to web root
pushd ../web/

# Create backup
drush sql-dump --gzip --result-file=$filename

# Go back
popd

#Delete old backups
find . -maxdepth 1 -type f -name '*.sql.gz' -mtime +14 -delete
