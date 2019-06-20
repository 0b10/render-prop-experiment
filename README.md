# Summary

A project that makes heavy use of render props in an attempt to minimise coupling between components.
This project mimics a simple blog. For now, it's very basic.

# Concepts

All concepts used to reduce coupling:

* Render props
* The Flux architecture
* A separate model

The goal here is to make each component reusable, and not to focus on features, or pretty styling.

# Responsiveness

An attempt is made to make the app responsive. Only styled-components are used - no other CSS frameworks; all of the CSS is written by manually.

# Architecture

* The "components" are highly decoupled, and only import third-party modules;
* The "layouts" are decoupled, and only import third-party modules:
  * except the Layout, which is a convenience component to keep App.js tidy;
  * Layout imports a lot of other project modules, and is not reusable outside of this application.
* The Flex architecture introduces some coupling between actions, dispatcher, and store - specifically the dispatcher is imported and used within the other two modules. These modules are project specific anyway, so not typically reusable. Any component that depends on an action, or is observing the store, does so via dependency injected generalised functions/objects. 
