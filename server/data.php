<?php
//Cabeceras HTTP para autorizar el acceso desde el móvil.
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');
// configuration
$dbhost 	= "localhost";
$dbname		= "hoteles";
$dbuser		= "root";
$dbpass		= "";
if($_SERVER['REQUEST_METHOD'] == 'POST')
{
	$jsonHotel = file_get_contents("php://input");
	$hotelObj  = json_decode($jsonHotel);

    // database connection
    $conn = new PDO("mysql:host=$dbhost;dbname=$dbname",$dbuser,$dbpass);
    // query
    $sql = "INSERT INTO hotel (name, start, price) VALUES (:name, :start, :price)";
    $q = $conn->prepare($sql);
    $result = $q->execute(array(
                      ':name'  => $hotelObj->name,
                      ':start' => $hotelObj->start,
                      ':price' => $hotelObj->price
                ));

	 if($result){
        // todo salió bien
        echo json_encode(array(
            'resultado' => 1,
            'mensaje' => 'hotel guardado con exito '
        ));
    }else{
        //Hubo un error
        echo json_encode(array(
            'resultado' => 0,
            'mensaje' => 'Hubo un error al guardar el hotel',
            exception => $q->errorInfo()
        ));
    }
}
if($_SERVER['REQUEST_METHOD'] == 'GET')
{
	$whereCreditos = "";

	if(isset($_REQUEST['precio']))
	{
		$numPrecioABuscar = $_REQUEST['precio'];
		$whereCreditos    = "AND price <= $numPrecioABuscar";
	}

  // database connection
  $conn = new PDO("mysql:host=$dbhost;dbname=$dbname",$dbuser,$dbpass);
  // query
  $sql = "SELECT * from hotel where true $whereCreditos";
  $q = $conn->prepare($sql);

	$q->execute();
	$resultados = $q->fetchAll(PDO::FETCH_ASSOC);

	echo json_encode($resultados);
}
?>
