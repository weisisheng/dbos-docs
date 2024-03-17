---
sidebar_position: 1
title: DBOS Quickstart
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Here's how to get a simple DBOS "Hello, Database!" application up and running on DBOS cloud in less than five minutes!

### Preliminaries
The DBOS SDK requires [Node.js 20 or later](https://nodejs.org/en).  To install (assuming you don't already have Node.js installed), copy and run the following commands in your terminal:

<Tabs groupId="operating-systems">
  <TabItem value="mac" label="macOS">
  ```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm

nvm install 20
nvm use 20
  ```
  </TabItem>
  <TabItem value="win" label="Windows (WSL)">
  ```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install 20
nvm use 20
  ```
  </TabItem>
  <TabItem value="ubuntu" label="Ubuntu">
  ```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install 20
nvm use 20
  ```
  </TabItem>
</Tabs>


### Project Initialization

To initialize a new DBOS application, run the following command.
Application names should be between 3 and 30 characters and must contain only lowercase letters and numbers, dashes (`-`), and underscores (`_`).

```bash
npx -y @dbos-inc/dbos-sdk@latest init -n <app-name>
```

This creates a folder for your project, configures its layout, and installs required dependencies.
If successful, it should print `Application initialized successfully!`.
By default, `dbos-sdk init` instantiates a "Hello, Database!" application which greets users and tracks the count of greetings per user.
First, we'll show you how to deploy it to DBOS cloud, then we'll show you how to run it locally and extend it with more powerful features.


### Creating a DBOS Cloud Account

Let's start by creating a DBOS Cloud account.
From your DBOS application directory, run the following command:

```
cd <app-name>
npx dbos-cloud register -u <username>
```

:::info

The DBOS Cloud CLI uses the [`dbos-cloud`](https://www.npmjs.com/package/@dbos-inc/dbos-cloud) npm package.
To install the latest version, run `npm install @dbos-inc/dbos-cloud@latest` in your package root.
For a complete reference, see [here](../api-reference/cloud-cli.md).

:::

User names should be between 3 and 30 characters and must contain only lowercase letters, numbers, and underscores (`_`).

When you run the command, it will ask you for some information, then redirect you to a secure login portal.
Open the login portal in your browser and click `Confirm`, then create a new account (or log in to your account if you've already created one through our [website](https://dbos.dev)).
After you're done, go back to the terminal.
If everything's working, the command should succeed and print `<username> successfully registered!`.

:::info
When you log in to DBOS Cloud from an application, a token with your login information is stored in the `.dbos/` directory in your application package root.
:::

:::info
If you register with an email and password, you also need to verify your email through a link we email you.
:::

### Provisioning a Database Instance

Next, let's provision a Postgres database instance your applications can connect to!
You should choose a database instance name, username and password.
Both the database instance name and username must be between 3 and 30 characters and contain only lowercase letters and numbers, dashes (`-`), and underscores (`_`).
The database password must contain 8 or more characters.
Run this command and choose your database password when prompted (it should take ~5 minutes to provision):

```
npx dbos-cloud db provision <database-instance-name> -U <database-username>
```

If successful, the command should print `Database successfully provisioned!`.
For more information on cloud database management, check out [our guide](../cloud-tutorials/database-management.md).

:::info
The Postgres database instance you just provisioned is a physical server that can host multiple independent databases for different applications.
You can define which database your application uses through the `app_db_name` field in its [`dbos-config.yaml`](../api-reference/configuration.md#database).
DBOS Cloud automatically creates your application database and applies your schema migrations when you deploy an application.

In this documentation, we use "database instance" or "database server" to refer to the physical server and "database" to refer to the application database.
:::

### Registering and Deploying an Application

Now, we're ready to register and deploy your application to DBOS Cloud!
First, register your application by running this command, using your database instance name from the last step:

```
npx dbos-cloud app register -d <database-instance-name>
```

If successful, the command should print `Successfully registered <app-name>!`

Now, deploy your application to run it in the cloud!

```
npx dbos-cloud app deploy
```

If successful, the command will print `Successfully deployed <app-name>! Access your application at <URL>`
The URL should look like `https://<username>-<app-name>.cloud.dbos.dev/`
Your application is now live at that URL!
If you ever forget the URL, you can retrieve it (and some other information) by running `npx dbos-cloud app status`.

To see that your app is working, visit `<URL>/greeting/dbos` in your browser.
For example, if your username is `mike` and your app name is `hello`, visit `https://mike-hello.cloud.dbos.dev/greeting/dbos`.
You should get this message: `Hello, dbos! You have been greeted 1 times.` Each time you refresh the page, the counter should go up by one!

Congratulations, you've successfully deployed your first application to DBOS Cloud!

:::info
You don't have to worry about changing database server connection parameters like `hostname` or `password` in [`dbos-config.yaml`](../api-reference/configuration.md) to deploy an application to the cloud&#8212;DBOS automatically applies the connection information of your cloud database instance.
:::

### Going Back to Square One

To stop and delete your application, you can run the following command:
```
npx dbos-cloud app delete <app-name>
```

After deleting your app, if you'd like to erase your database instance, run:
```
npx dbos-cloud db destroy <database-name>
```

:::warning
Take care&#8212;this will irreversibly delete all data in the database instance.
:::

### Testing Locally

You need a database different from your cloud database to test your application locally.
DBOS works with any Postgres database, but to make things easier, this tutorial uses [Docker](https://www.docker.com/) to launch a Postgres database (DBOS doesn't need Docker, but this tutorial uses it as a convenience).  To install (assuming you don't already have Docker installed):

<Tabs groupId="operating-systems">
  <TabItem value="mac" label="macOS">
  An easy way to install Docker on MacOS is through [Docker Desktop](https://docs.docker.com/desktop/install/mac-install/).
  </TabItem>
  <TabItem value="win" label="Windows (WSL)">
  An easy way to install Docker on Windows is through [Docker Desktop](https://docs.docker.com/desktop/install/windows-install/).
  </TabItem>
  <TabItem value="ubuntu" label="Ubuntu">
  ```bash
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install -yq docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo groupadd docker
sudo usermod -aG docker $USER
  ```
  </TabItem>
</Tabs>

After installing Docker, close and reopen your terminal to apply any changes. Then, verify Docker is working by running:

```bash
docker run hello-world
```

We've provided a nifty script that starts a Docker Postgres container and creates a database:

```bash
cd <project-name>
export PGPASSWORD=dbos
./start_postgres_docker.sh
```

If successful, the script should print `Database started successfully!`.

Then, let's run a database migration to create some tables:

```bash
npx dbos-sdk migrate
```

If successful, the migration should print `Migration successful!`.

Next, build and run the app:

```bash
npm run build
npx dbos-sdk start
```

To see that it's working, visit this URL in your browser: [http://localhost:3000/greeting/dbos](http://localhost:3000/greeting/dbos).  You should get this message: `Hello, dbos! You have been greeted 1 times.` Each time you refresh the page, the counter should go up by one!

Congratulations!  You just launched your first DBOS application.

If you want to learn how to build your own application, check out our [programming quickstart](./quickstart-programming.md).