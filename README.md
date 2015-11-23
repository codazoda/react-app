# react-app

A simple but complete ReactJS web app example.

The design is inspired by the Android flat design. It's responsive with break points at 500, 800, 1100, and 1600 pixels.

# Getting Started

To view the app, simply open the index.html file in the root directory. Note that the app must be compiled so changes you make will not show up until after you build the app.

# Installing Dependencies

The app requires React, Babel, and Browserify. Browserify lets you use require() statements while we bundle everything together using Babel. React, of course, is the framework.

These dependencies are not included in the repo. Instead, I've included a node package.json file that describes the dependencies. You can install the dependencies by running the following command in the root directory.

    npm install

# Building

The app is built (or compiled) with browserify as described in the ReactJS documentation. In order to build, you'll need browserify. Install it globally with the following command.

    npm install -g browserify

There is a ./build script in the root directory to manually build the project. After making changes to the JS files run the build script with the following command and then refresh the page.

    ./build

# App Design

The main app entry point is the AudioApp class. There are also two components, a primary App component and an Item component.