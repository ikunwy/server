import express, { Request, Response } from 'express'

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!')
}) 
 
app.listen(+port, '0.0.0.0', () => {
  console.log(`Server is running at ${port}`)
})