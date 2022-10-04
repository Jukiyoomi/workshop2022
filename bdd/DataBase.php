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
}
