# Breeze theme for Vaadin

<img src="https://user-images.githubusercontent.com/19607782/161480522-e42a1a3a-cc40-4474-bb11-b714f3fdd5f4.png" alt="Sample screenshot" width="600">

Breeze is built on top of Lumo and heavily inspired by visual style of [TailwindUI](https://tailwindui.com/). It can be used in light or dark mode and contains a custom palette for Vaadin Charts. Built by Juuso Kantonen, a UX designer working at Vaadin.

To install this add-on, check out the latest version and Maven/Gradle dependency snippets from the [Directory](https://vaadin.com/directory).

Then update your frontend/themes/mytheme/theme.json to have parent configuration

```json
{
  "lumoImports" : [ "typography", "color", "spacing", "badge", "utility" ],
  "parent": "breeze"
}
```

You can still make your own changes on top in the applications theme.


## Running the application

To run the project during development, run `mvn jetty:run`

## Cutting releases

Use `mvn release:prepare release:perform`. This will automatically tag release and build it to target/checkout/target. Then upload to the Directory.
