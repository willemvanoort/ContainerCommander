var express= require('express'),
    app    = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){
	res.render('index', {
		title: 'Home'
	});
});

app.listen(80);
