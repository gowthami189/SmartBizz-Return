<?php
// This is the entry point for the API
$request = $_SERVER['REQUEST_URI'];

switch ($request) {
    case '/api/invoice.php':
        include 'api/invoice.php';
        break;
    case '/api/payment.php':
        include 'api/payment.php';
        break;
    case '/api/gst.php':
        include 'api/gst.php';
        break;
    default:
        http_response_code(404);
        echo json_encode(['message' => 'Not Found']);
        break;
}
?>
