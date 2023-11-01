#!/usr/bin/env bash

set -e

VERSION='invalid'
COMMIT="0"

Help()
{
   # Display Help
   echo "Add description of the script functions here."
   echo
   echo "Syntax: publish.sh [-v|c|h]"
   echo "options:"
   echo "v     Version of package to release"
   echo "c     Commit and tag"
   echo "h     Print this Help"
   echo
}

while getopts ":hv:c:" option; do
   case $option in
      v)
         VERSION=$OPTARG;;
      c)
         COMMIT=$OPTARG;;
      h) # display Help
         Help
         exit;;
     \?) # Invalid option
         echo "Error: Invalid option"
         exit;;
   esac
done

echo "Bumping version to ${VERSION}"

npm version ${VERSION} --no-commit-hooks --no-git-tag-version --preid beta

pushd src/lib/ui-switch

npm version ${VERSION} --no-commit-hooks --no-git-tag-version --preid beta

popd

if [ "$COMMIT" = "1" ]; then
  echo "Commiting and tagging"

  git commit -am 'chore(version): Bump version'

  git tag -a "${VERSION}" -m "Version ${VERSION}"
fi
