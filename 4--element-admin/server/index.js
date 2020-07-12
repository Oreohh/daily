const express = require('express')
const app = express()

//跨域
app.use(require('cors')())
//识别json数据
app.use(express.json())

//连接数据库
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/element-admin', {
  useNewUrlParser: true,
  useFindAndModify: true,
  useCreateIndex: true,
})

//数据操作模型
const Article = mongoose.model('Article', new mongoose.Schema({
  title: { type: String },
  body: { type: String },
}))

//获得
app.get('/', async (req, res) => {
  res.send('index')
})

//新增
app.post('/api/articles', async (req, res) => {
  const article = await Article.create(req.body)
  res.send(article)
})
//文章列表
app.get('/api/articles', async(req, res) => {
  const articles = await Article.find()
  res.send(articles)
})
//删除文章
app.delete('/api/articles/:id', async(req, res) => {
  await Article.findByIdAndDelete(req.params.id)
  res.send({
    status: true
  })
})
//文章详情
app.get('/api/articles/:id', async(req, res) => {
  const article = await Article.findById(req.params.id)
  res.send(article)
})
//文章修改
app.put('/api/articles/:id', async (req, res) => {
  const article = await Article.findByIdAndUpdate(req.params.id, req.body)
  res.send(article)
})

app.listen(3001, () => {
  console.log('http://localhost:3001/')
})