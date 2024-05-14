<?php
        session_start(); 

        $products_list = array(
           0 => array( 
                    'product_id' => '9',      //код товара 2
                    'price'      => '990',  //цена товара 2
                    'count'      => '1'      //количество товара 2
            ),
                
        );
        $products = urlencode(serialize($products_list));
         $sender = urlencode(serialize($_SERVER));
        // параметры запроса
        $data = array(
            'key'             => '41d21e4fb97c89c33aedc8585c8e7cd4', //Ваш секретный токен
            'order_id'        => number_format(round(microtime(true)*10),0,'.',''), //идентификатор (код) заказа (*автоматически*)
            'country'         => 'UA',                      // Географическое направление заказа
            'office'          => '1',                   // Офис (id в CRM)
            'products'        => $products,                 // массив с товарами в заказе
            'bayer_name'      => $_GET['name'],             // покупатель (Ф.И.О)
            'phone'           => $_GET['phone'],           // телефон
            'email'           => $_GET['email'],           // электронка
            'comment'         => $_GET['comment'],                   // комментарий
            'site'            => $_SERVER['SERVER_NAME'],  // сайт отправляющий запрос
            'ip'              => $_SERVER['REMOTE_ADDR'],  // IP адрес покупателя
            'delivery'        => $_GET['delivery'],        // способ доставки (id в CRM)
            'delivery_adress' => $_GET['delivery_adress'], // адрес доставки
            'payment'         => '',          // вариант оплаты (id в CRM)
            'sender'          => $sender,             
            'utm_source'      => $_SESSION['utms']['utm_source'],  // utm_source 
            'utm_medium'      => $_SESSION['utms']['utm_medium'],  // utm_medium 
            'utm_term'        => $_SESSION['utms']['utm_term'],    // utm_term   
            'utm_content'     => $_SESSION['utms']['utm_content'], // utm_content    
            'utm_campaign'    => $_SESSION['utms']['utm_campaign'], // utm_campaign
            'additional_1'    => $_GET['size'],
            'additional_2'    => $_GET['color'],
        );
         
        // запрос
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, 'http://spasesell.lp-crm.biz//api/addNewOrder.html');
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
        $out = curl_exec($curl);
        curl_close($curl);
        //$out – ответ сервера в формате JSON
?>

<!DOCTYPE html>
<html lang="ru">
<head>

	<meta charset="UTF-8">
	<title>Дякую за замовлення</title>
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400&amp;subset=cyrillic" rel="stylesheet">
	<style>
		a{color:#fff;text-decoration:none}.container{width:100%;height:100%;font-family:'Open Sans',sans-serif}.wrap{width:700px;margin:165px auto 0;text-align:center}.zag{font-size:29px;font-weight:400;margin-bottom:0;margin-top:23px;color:#38382F}.podzag{font-size:20px;color:#7F7F7F;font-weight:300;margin-top:12}.button{background:#38382F;padding:12px 25px;margin:0 auto}.bor{margin-top:45px}.img{width:100px;height:100px;background:url(http://i82.fastpic.ru/big/2016/1110/91/900e8526e8b44b8993f6e4ca19ce7891.png) center center no-repeat;margin:0 auto}
	</style>

</head>
<body>
	<div class="container">
		<div class="wrap">
			<div class="img"></div>
			<p class="zag">Дякую. Ваша заявка успішно відправлена.</p>
			<p class="podzag">Наш менеджер зв'яжеться з Вами найближчим часом.</p>
			<div class="bor">
				<a href="index.php" class="button">Повернутись на сайт</a>
			</div> 
		</div>
	</div>

</body>
</html>