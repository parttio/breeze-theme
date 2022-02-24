# Breeze theme for Vaadin

Breeze is built on top of Lumo and heavily inspired by visual style of [TailwindUI](https://tailwindui.com/). It can be used in light or dark mode and contains a custom palette for Vaadin Charts. Built by Juuso Kantonen, a UX designer working at Vaadin.

To install this add-on, check out the latest version and Maven/Gradle dependency snippets from the [Directory](https://vaadin.com/directory).

Then change your theme annotation to use Breeze: `@Theme("breeze")´

## Running the application

To run the project during development, run `mvn jetty:run`

## Cutting releases

Use `mvn release:prepare release:perform`. This will automatically tag release and build it to target/checkout/target. Then upload to the Directory.
