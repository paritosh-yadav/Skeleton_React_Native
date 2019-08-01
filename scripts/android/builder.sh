#!/bin/bash

set -e
cur_dir=`dirname $0`

echo "BUILDING ANDROID";
cd $cur_dir/../../android &&
./gradlew clean assembleRelease -PBUILD_NAME=$BUILD_NAME -PBUILD_NUMBER=$BUILD_NUMBER -PANDROID_APP_ID=$ANDROID_APP_ID -PMYAPP_RELEASE_STORE_FILE=$ANDROID_KEYSTORE_FILE -PMYAPP_RELEASE_KEY_ALIAS=$ANDROID_KEY_ALIAS -PMYAPP_RELEASE_STORE_PASSWORD=$ANDROID_KEYSTORE_PASSWORD -PMYAPP_RELEASE_KEY_PASSWORD=$ANDROID_KEY_PASSWORD && cd ..

echo "APK will be present at android/app/build/outputs/apk/app-release.apk"


# sample command
#BUILD_NAME=1.1.1 BUILD_NUMBER=11 ANDROID_APP_ID='com.skeletonapp' ANDROID_KEYSTORE_FILE='dev_release.keystore' ANDROID_KEY_ALIAS='dev-alias' ANDROID_KEYSTORE_PASSWORD=skeleton ANDROID_KEY_PASSWORD=skeleton sh ./scripts/android/builder.sh