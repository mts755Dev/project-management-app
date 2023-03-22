import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import { connectDB } from "./config/db.js";
import schema from "./schema/schema.js";
import { graphqlHTTP } from "express-graphql";

dotenv.config();

const port = process.env.PORT;
const app = express();

connectDB();

app.use(cors());

app.use('/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  }
  ));

app.listen(port, console.log(`Server running on port ${port}`));
