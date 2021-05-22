'use strict';

const environment = require('./config/environment');
const projectDependencies = require('./config/projectDependencies');
const logger = require('./frameworks/common/logger');
const notFoundHandler = require('./frameworks/common/middleware/notFoundHandler');
const errorHandler = require('./frameworks/common/middleware/errorHandler');

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

    app.use(notFoundHandler.notFound);

    app.use(errorHandler.wrap);
    app.use(errorHandler.log);
    app.use(errorHandler.error);

    const server = app.listen(environment.app.port, () => {
      logger.info(
        `[index]: http://${environment.app.host}:${environment.app.port}`
      );
    });

    process.on('SIGINT', () => {
      logger.info(
        `[index]: web server has been stopped to application interrupted`
      );

      server.close();
    });

    process.on('SIGTERM', () => {
      logger.info(
        `[index]: web server has been stopped due to application termination`
      );

      server.close();
    });
  } catch (err) {
    logger.error(`[index]: ${err.message}`);

    // eslint-disable-next-line no-magic-numbers
    process.exit(1);
  }
};

main();
