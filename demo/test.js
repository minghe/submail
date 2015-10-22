var Mail = require('../mail');

var mail = new Mail({
  appid: 'xxxx',
  appkey: 'xxxxxx',
  signtype: 'normal'
});

mail.add_to('xxx@126.com');
mail.add_to_name('minghe');
mail.set_from('xx');
mail.set_project('xxxxx');
mail.add_var('title','minghe');

mail.send();
