#!/bin/sh
keytool -genkey -v -keystore e-krishi.jks -keyalg RSA -keysize 2048 -validity 10000 -alias e-krishi
mv e-krishi.jks keys/
