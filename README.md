# @dekproject/comtele

Comtele interface plugin for DEK

What does this plugin do?

* Control configuration for connection to Comtele in production development mode in a simplified way with **dotenv**
* Performs connection implementation along the lines ES6 being pre requirement to start the project

## Instalation

To install the bootstrap we recommend using the CLI

```bash
$ yarn add @dekproject/comtele --save
$ nano .env
```

In the .env file add the following settings

```
COMTELE_KEY=MYKEY
COMTELE_SENDER=Eu
```

## Usage

Using direct

```bash
$ npm i @dekproject/scope
```

Using in the standard DEK skeleton

```js
import { $, app, comtele } from "@dekproject/scope";

app.get("/sendsms", (req, res) => {
    comtele.send("2199999999", "SMS Test");
});

$.wait("comtele").then(() => {
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}!`);
    });
});
```
