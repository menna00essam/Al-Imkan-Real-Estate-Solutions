<?php
// proxy.php

// رابط Google Apps Script ثابت هنا:
$googleScriptUrl = "https://script.google.com/macros/s/AKfycbx9l1giKBK0EAmyT0gujtXbvSBYAdPQ4c9Pu3LmePNgGXWhBl0tX0fiMa2mQ5IOsC-wag/exec";

// قراءة البيانات التي أُرسلت من الجافاسكريبت
$input = file_get_contents("php://input");

// إعداد طلب POST إلى Google Script باستخدام curl
$ch = curl_init($googleScriptUrl);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $input);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json"
]);

// **هنا إضافة متابعة إعادة التوجيه**
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

if (curl_errno($ch)) {
    // في حالة وجود خطأ في طلب curl
    http_response_code(500);
    echo json_encode([
        "result" => "error",
        "error" => curl_error($ch)
    ]);
    curl_close($ch);
    exit;
}

curl_close($ch);

// إعادة الرد من Google Script كما هو
http_response_code($httpCode);
header('Content-Type: application/json');
echo $response;
?>
