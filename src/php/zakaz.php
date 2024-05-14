<?php 
$name = stripslashes(htmlspecialchars($_POST['name']));
$phone = stripslashes(htmlspecialchars($_POST['phone']));
// $city = stripslashes(htmlspecialchars($_POST['city']));
// $post = stripslashes(htmlspecialchars($_POST['post']));
$size = stripslashes(htmlspecialchars($_POST['size']));
$color = stripslashes(htmlspecialchars($_POST['color']));
$comment = stripslashes(htmlspecialchars($_POST['comment']));


if($_GET['product_id']){
    $product_id = $_GET['product_id'];
}else{
    $product_id = $_POST['product_id'];
}
if(empty($name) || empty($phone)){
echo '<h1 style="color:red;">Пожалуйста заполните все поля</h1>';
echo '<meta http-equiv="refresh" content="2; url=http://'.$_SERVER['SERVER_NAME'].'">';
}
else{
$subject = 'Універсальний ліхтар туриста'; // заголовок письмя
$addressat = "kompot.andrik@gmail.com"; // Ваш Электронный адрес
$success_url = './call.php?name='.$_POST['name'].'&phone='.$_POST['phone'].'&comment='.$_POST['comment'].'&size='.$_POST['size'].'&color='.$_POST['color'].'&time='.$_POST['Время_звонка'].'';
$message = "ФИО: {$name}\nКонтактный телефон: {$phone}\nТовар: {$product_id}";
$verify = mail($addressat,$subject,$message,"Content-type:text/plain;charset=utf-8\r\n");
if ($verify == 'true'){
    header('Location: '.$success_url);
    echo '<h1 style="color:green;">Вітаю! Ваш заказ прийнятий!</h1>';
    exit;
}
else 
    {
    echo '<h1 style="color:red;">Виникла помилка!</h1>';
    }
}
?>