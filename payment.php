<?php
include '../config/db.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $paymentData = json_decode(file_get_contents("php://input"), true);
    
    $stmt = $conn->prepare("INSERT INTO payments (invoice_id, amount, payment_date) VALUES (:invoice_id, :amount, NOW())");
    $stmt->execute([
        ':invoice_id' => $paymentData['invoice_id'],
        ':amount' => $paymentData['amount']
    ]);

    echo json_encode(['message' => 'Payment recorded successfully']);
}

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $stmt = $conn->query("SELECT * FROM payments");
    $payments = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($payments);
}
?>
