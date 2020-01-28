const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

// Connect to mlab database
// make sure to replace your own db string with mine 



mongoose.connect('mongodb+srv://jay:1234@tutorial1-kgyrd.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true} )
mongoose.connection.once('open', () => {
    console.log('connected to db')
});

const app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema:schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('running on port 4000')
});




