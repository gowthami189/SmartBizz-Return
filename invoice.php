<?php
include '../config/db.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $invoiceData = json_decode(file_get_contents("php://input"), true);
    
    $stmt = $conn->prepare("INSERT INTO invoices (buyer_id, amount, status) VALUES (:buyer_id, :amount, :status)");
    $stmt->execute([
        ':buyer_id' => $invoiceData['buyer_id'],
        ':amount' => $invoiceData['amount'],
        ':status' => 'pending'
    ]);

    echo json_encode(['message' => 'Invoice created successfully']);
}

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $stmt = $conn->query("SELECT * FROM invoices");
    $invoices = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($invoices);
}
?>
