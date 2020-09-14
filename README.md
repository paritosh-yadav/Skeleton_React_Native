# Skeleton React Native

[![CI Status](https://github.com/paritosh-yadav/Skeleton_React_Native/workflows/Node.js%20CI/badge.svg?branch=develop)](https://github.com/sebastianbergmann/phpunit/actions)

React Native app with industrial standards.

  - Eslint - as linter 
  - Flow - for Static type checking
  - Jest - for Unit testing
  - React Native Testing Library - for Component tests
  - Detox - for e2e testing

# Features!

  - Basic signup flow
  - Free Brewery data (https://www.openbrewerydb.org/)

Please create following file at the root directory and add the following lines to it:

**.env.development**
```
GOOGLE_MAPS_API_KEY=xyz
API_URL=https://api.openbrewerydb.org/
API_DRIVER=remote
```

**.env.detox**
```
API_DRIVER=fake
```

**.env.production**
```
GOOGLE_MAPS_API_KEY=prod
API_URL=https://api.openbrewerydb.org/
API_DRIVER=remote
```

**.env**
```
GOOGLE_MAPS_API_KEY=abcdefgh
API_URL=https://api.openbrewerydb.org/
API_DRIVER=remote
```


> This repo is a work in progress.
> Any suggestions would be welcomed.
> Please feel free to raised PR.

### Tech

This repo uses a number of open source projects to work properly:

* [@react-native-community](https://github.com/react-native-community/) - Community driven by React Native team itself along with worldwide contributers.
* [@react-navigation](https://reactnavigation.org/) - Library for seemless navigation intigration.
* [axios](https://github.com/axios/axios/) - Making Network request flawless.
* [react-native-config](https://github.com/luggit/react-native-config/) - Awrsome for managing environment setup.
* [redux](http://redux-docs.netlify.com/) - State management at fingertips
* [eslint](https://eslint.org/) - Linter
* [husky](https://github.com/typicode/husky/) - Githooks intagration
* [Jest](https://jestjs.io/) - Making Unit test possible
* [testing-library](https://callstack.github.io/react-native-testing-library/) - Component testing at ease

### Installation

Please refer the official [React Native](https://reactnative.dev/docs/environment-setup/) docs for prerequisite.

Install the dependencies and devDependencies.

```sh
$ cd Skeleton_React_Native
$ yarn install
$ pod install

$ detox build -c ios
$ detox test -c ios
```

For running unit test
```sh
$ yarn test
```

For running e2e test
```sh
$ detox build -c ios
$ detox test -c ios
```

License
----

Open Source