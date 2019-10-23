# angular-microfrontend
This project represents how we can implement a micro frontend using angular elements.

`ng serve` for running the parent app

`ng build --prod --output-hashing none --single-bundle true`:  for building both child apps.

`http-server ./dist/child1-app -p 8081` for running app1

`http-server ./dist/child2-app -p 8082` for running app2

