---
title: "Covid 19"
date: 2021-07-15T10:05:58+05:30
draft: false
tags: ["React-Native", "Typescript", "Android", "iOS", "Web"]
summary: "React Native project built with Typescript, that shows statistics for your country's Corona cases, developed to run on Android, iOS, and Web with a single codebase"
---

![Covid 19 Project](/projects/Covid19/1.png)

I created this project last year (2020) in March and have been maintaining it since then. When I started the project I was very new to React Native and didn't know much about it and needed a project through which I can experiment and learn more practical skills about the framework. It sure has helped me learn a lot about React Native.



### What's the project

The project has a simple goal to help people understand the severity of Covid 19 and it's spread in there part of the world and to act as an experimental playground for me to try out new things. Right now the project shows stats for the world and the country you reside in (if you don't give location permission, it defaults to India) and is available on Android, iOS and the Web using the same codebase with about 96% code sharing between the platforms.



### Try it Out

For the dev enthusiast the project is open sourced on Github and can be found [here](https://github.com/sarthakpranesh/Covid19).

For the once who just want to try it out, the project is hosted as a website [here](https://covid19rn.vercel.app/) and is also available as an APK [here](https://github.com/sarthakpranesh/Covid19/releases/download/v3.2.0/Covid19-universal-release.apk), for running the app on iOS you'll have to clone the project and start it on a Mac.



### What did I learn?

I have learned many things through this project, I'll give some gists about them here and will right a detailed article on some later.

##### Animations

Projects like these are great to learn basics of animations and try them out. I have used two libraries namely `react-native-reanimated` and `moti` in the project and learned a bit about them using the project.

##### State Management

I have used `redux` for state management along with `async-storage` for persistence of data. So in the event if the user loses their network connectivity the app will still display the last state of data stored on the mobile. Doing this also helps the app start faster, as we can implement `Optimistic UI` and don't have to wait for the API response.

##### Cross Compatibility

Not many know that many big companies use React Native for making their apps and website from single code base. Some names would be `Twitter`, `Uber`, `Flipkart`, etc and more can be found [here](https://necolas.github.io/react-native-web/) on the official website of `react-native-web`.

Though there are many optimization you can make for your `web` builds using `react-native-web` but I haven't looked into those yet. Here is a light house report for the website without any build optimizations

![Lighthouse report](/projects/Covid19/lighthouse.png)

Yup I know, it's not great but it can surely be bettered using your own domain and server, along with optimizations for web builds like bundle/code splitting.

##### App performance

This is related to the performance of the app generally on native platforms such as Android. I have had many comment on React Native being "slow", well they aren't completely wrong in saying that as it focuses on easy of development out of the box with decent enough performance and not solely on performance optimization. Having said that, they do provide many developer configuration and documentation both for Android and iOS to enhance performance of the final builds by a great extent and leave it to the developers to opt in. There are a number of things we can do to achieve better performance on React Native apps, some are as follows:

- Using [Hermes engine](https://hermesengine.dev/)
- Bundle Splitting
- Architecture specific builds
- Proguard on Android
- Be careful about app re-renders
- Logs are good for development, but unnecessary on production so remove them, etc



### Conclusion

I have had a blast creating and maintaining this project, it really has been fun to work with React Native and understand what it has to offer. I look forward to creating more awesome projects with it in the future.

