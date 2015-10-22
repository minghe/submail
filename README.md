# submail

submail 用于[http://submail.cn/](http://submail.cn/)邮件客户端，submail 提供的邮件触发服务相当不错。

## 例子

    var Mail = require('submail/mail');
    
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

* appid : 在 SUBMAIL 应用集成中创建的应用 ID
* appkey : 应用key

[详细说明](http://submail.cn/chs/documents/developer/nX6U81)

