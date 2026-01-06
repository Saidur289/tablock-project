import express from 'express'
import cors from 'cors'
import routes from './routes/index.js'
import { prisma } from './lib/prisma'

const app = express()
app.use(express.json())
app.use(cors())
app.get("/", async (_req, res) => {
  const now = await prisma.$queryRaw`SELECT NOW()`;
  res.json({ message: "Backend running 🚀", now });
});
app.use('/api/v1', routes)
export default app