var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId:1511958569,
  channelSecret:5d536ccf4896dab8c3c2e07e3e066604,
  channelAccessToken:BvF2aekY5Cds78KP2BuDIGlr98BXpxi/eVb6sL3j11vVe6+y9RGn7fuoi6KYTB92iHjHqG79QP6FCc7l+PMhsEQ8/P03boI6lHuGACi6S2mPi0+21+XR3jkYu2usVfdCOn0DP/FDHlQyQrG2B/feHQdB04t89/1O/w1cDnyilFU=
});

bot.on('message', function(event) {
  console.log(event); //�⦬��T���� event �L�X�Ӭݬ�
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//�]�� express �w�]�� port 3000�A�� heroku �W�w�]�o���O�A�n�z�L�U�C�{���ഫ
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});