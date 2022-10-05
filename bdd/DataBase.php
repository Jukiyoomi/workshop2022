<?php
require "DataBaseConfig.php";

class DataBase
{
    public $connect;
    public $data;
    private $sql;
    protected $servername;
    protected $username;
    protected $password;
    protected $databasename;

    public function __construct()
    {
        $this->connect = null;
        $this->data = null;
        $this->sql = null;
        $dbc = new DataBaseConfig();
        $this->servername = $dbc->servername;
        $this->username = $dbc->username;
        $this->password = $dbc->password;
        $this->databasename = $dbc->databasename;
    }

    function dbConnect()
    {
        $this->connect = mysqli_connect($this->servername, $this->username, $this->password, $this->databasename);
        return $this->connect;
    }

	function getServername(){
		return $this->servername;
	}
	function getUserame(){
		return $this->username;
	}
	function getPassword(){
		return $this->password;
	}
	function getDatabasename(){
		return $this->databasename;
	}

	function prepareData($data)
	{
		return mysqli_real_escape_string($this->connect, stripslashes(htmlspecialchars($data)));
	}

    function insert($table, $id_silo, $quantite)
    {
		$date = new DateTime("now", new DateTimeZone("Europe/Paris"));
		$date = $date->format('Y-m-d H:i:s');

        $date = $this->prepareData($date);
        $quantite = $this->prepareData($quantite);
		$id_silo = $this->prepareData($id_silo);

		$this->sql = "INSERT INTO " . $table . " (id_silo, quantite, date) VALUES ('" . $id_silo. "','" . $quantite . "','" . $date . "')";
		if (mysqli_query($this->connect, $this->sql)) {
			return true;
		} else {
			echo mysqli_error($this->connect);
			return false;
		}
    }

	public function getData($table, $id_silo){
		/*$table = $this->prepareData($table);
		$id_silo = $this->prepareData($id_silo);
		$this->sql = "select * from " . $table . " where id_silo = '" . $id_silo . "'";
		$result = mysqli_query($this->connect, $this->sql);
		$row = mysqli_fetch_assoc($result);
		if (mysqli_num_rows($result) != 0) {
			$result = $row['result'];
		}
		return $result;*/

		$this->sql = "SELECT * FROM " . $table . " WHERE id_silo = '" . $id_silo . "'";
		$result = mysqli_query($this->dbConnect(), $this->sql);

		if ($result->num_rows > 0) {
			// output data of each row
			for ($set = array (); $row = $result->fetch_assoc(); $set[] = $row);
		} else {
			echo "0 results";
		}
		
		return $set;
	}

}
