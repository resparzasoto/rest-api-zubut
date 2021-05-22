'use strict';

const environment = require('./config/environment');
const projectDependencies = require('./config/projectDependencies');

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const pino = require('express-pino-logger');

const app = express();

const main = async () => {
  try {
    await projectDependencies.DatabaseService.initDatabase();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(pino());
    app.use(cors());
    app.use(helmet());

    app.get('/', (req, res) => {
      return res.send({ hi: 'world' });
    });

    // eslint-disable-next-line no-magic-numbers
    const server = app.listen(environment.app.port, () => {
      // eslint-disable-next-line no-console
      console.log(
        `[index]: http://${environment.app.host}:${environment.app.port}`
      );
    });

    process.on('SIGINT', () => {
      // eslint-disable-next-line no-console
      console.log(
        `[index]: web server has been stopped to application interrupted`
      );

      server.close();
    });

    process.on('SIGTERM', () => {
      // eslint-disable-next-line no-console
      console.log(
        `[index]: web server has been stopped due to application termination`
      );

      server.close();
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(
      `[index]: an error occurred in initialization of application`,
      err
    );

    // eslint-disable-next-line no-magic-numbers
    process.exit(1);
  }
};

main();
