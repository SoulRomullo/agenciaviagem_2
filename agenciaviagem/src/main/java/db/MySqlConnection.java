package db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class MySqlConnection {

	private static final String url = "jdbc:mysql://localhost:3306/agenciaviagem";
	private static final String user = "root";
	private static final String password = "romSantos@100";
	
	public static Connection createConnection() {
		
		try {
			
			Class.forName("com.mysql.cj.jdbc.Driver");
			System.out.println("Driver encontrado com sucesso");
			
		} catch (ClassNotFoundException e) {
			System.out.println("Driver não encontrado " + e.getMessage());
		}
		
		try {
			Connection connection = DriverManager.getConnection(url, user, password);
			System.out.println("Conectado com sucesso!");
			return connection;
			
		} catch (SQLException e) {
			System.out.println("Não foi possível conectar com o banco de dados. " + e.getMessage());
			return null;
		}
	}
}
