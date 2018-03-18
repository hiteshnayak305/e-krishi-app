#!/bin/sh
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore keys/e-krishi.jks platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk e-krishi
/home/hitesh/Android/Sdk/build-tools/27.0.3/zipalign -v 4 platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk E-krishi.apk
