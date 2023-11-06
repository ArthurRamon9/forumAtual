const express         = require('express');
const cors            = require('cors');
const app             = express();
const userRouter = require('./routes/usersRouter');
const loginRouter = require('./routes/loginRouter');
const postRouter = require('./routes/postsRouter');
const commentRouter   = require('./routes/commentsRouter');
const reactionRouter = require('./routes/reactionsRouter');
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.set('port', process.env.PORT);
app.use('/api', commentRouter);
app.use('/api', userRouter);
app.use('/api', loginRouter);
app.use('/api', postRouter);
app.use('/api', reactionRouter);
module.exports = app;


