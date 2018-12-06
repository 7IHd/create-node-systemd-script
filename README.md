# create-node-systemd-script

Dynamically create a node systemd service.

This is intended for local development and only serves to simplify the creating
a node systemd service process.

Note: This has only been tested with http.

`npm install`

## Be prepared to answer the following

> **What is the name of the service?**

For instance, let's say you're creating a portfolio website and you want to name
the service `portfolio`.

> **What is the port number?**

What port would you like to access your local website?

> **What is the working directory for your service?**

What is the working directory for your project? You'll need the
[`<new-service>.service`](https://github.com/7IHd/node-systemd/blob/master/etc/systemd/system/hello_moto.service)
file as well as the
[`server.js`](https://github.com/7IHd/node-systemd/blob/master/app/services/hello_moto/server.js)
file.

# Run it

`node index.js`

# Helpful links

[JavaScript Command Line Interface CLI Node.js](https://www.sitepoint.com/javascript-command-line-interface-cli-node-js/)

# TODO

- If running with no arguments then give various options
- Add uninstall option
- Make default an install option
