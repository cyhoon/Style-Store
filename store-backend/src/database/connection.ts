import { createConnection, ConnectionOptions } from "typeorm";

const {
  DATABASE_HOST,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_NAME
} = process.env;

let connection = null;

const dbConnect = async () => {
  try {
    const options: ConnectionOptions = {
      type: "mysql",
      host: DATABASE_HOST,
      port: 3306,
      username: DATABASE_USER,
      password: DATABASE_PASSWORD,
      database: DATABASE_NAME,
      entities: [
        __dirname + "/model/*.ts",
      ],
      synchronize: true,
      logging: false
    };
  
    connection = await createConnection(options);
  } catch(error) {
    throw error;
  }
};

export {
  dbConnect,
  connection,
};