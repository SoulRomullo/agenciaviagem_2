package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import db.MySqlConnection;
import model.Cliente;

public class ClienteDao implements CRUD{

	private static Connection connection = MySqlConnection.createConnection();
	private static String sql;

	public static void create(Cliente cliente) {
		sql = "INSERT INTO usuario VALUES (null, ?, ?, ?, ?, null)";

		try {

			PreparedStatement preparedStatement = connection.prepareStatement(sql);

			preparedStatement.setString(1, cliente.getNome());
			preparedStatement.setString(2, cliente.getCpf());
			preparedStatement.setString(3, cliente.getEndereco());
			preparedStatement.setString(4, cliente.getTelefone());
			preparedStatement.setInt(5, cliente.getId_viagem());

			preparedStatement.executeUpdate();

			System.out.println("--Inserido no banco de dados com sucesso!");

		} catch (SQLException e) {
			System.out.println("N?o inserido no banco de dados algo deu errado. " + e.getMessage());
		}
	}

	public static void delete(int clienteId) {
		sql = "DELETE FROM usuario WHERE id = ?";

		try {

			PreparedStatement preparedStatement = connection.prepareStatement(sql);

			preparedStatement.setInt(1, clienteId);

			preparedStatement.executeUpdate();

			System.out.println("--Dados excluido com sucesso!");

		} catch (SQLException e) {
			System.out.println("--Dados n?o excluido do banco de dados. " + e.getMessage());

		}
	}

	public static List<Cliente> find(String pesquisa) {
		sql = String.format("SELECT * FROM usuario WHERE nome LIKE '%s%%' OR cpf LIKE '%s%%' ", pesquisa, pesquisa);
		List<Cliente> clientes = new ArrayList<Cliente>();

		try {

			Statement statement = connection.createStatement();
			ResultSet resultSet = statement.executeQuery(sql);

			while (resultSet.next()) {
				Cliente cliente = new Cliente();
				cliente.setId(resultSet.getInt("id"));
				cliente.setNome(resultSet.getString("nome"));
				cliente.setCpf(resultSet.getString("cpf"));
				cliente.setEndereco(resultSet.getString("endereco"));
				cliente.setTelefone(resultSet.getString("telefone"));
				cliente.setId_viagem(resultSet.getInt("id_viagem"));

				clientes.add(cliente);
			}

			System.out.println("--Pesquisa efetuado com sucesso!");
			return clientes;

		} catch (SQLException e) {
			System.out.println("--N?o foi poss?vel efetuar a pesquisa " + e.getMessage());
			return null;
		}
	}

	public static Cliente findByPk(int clienteId) {

		sql = String.format("SELECT * FROM usuario WHERE id = %d", clienteId);

		try {

			Statement statement = connection.createStatement();
			ResultSet resultSet = statement.executeQuery(sql);
			Cliente cliente = new Cliente();

			while (resultSet.next()) {

				cliente.setId(resultSet.getInt("id"));
				cliente.setNome(resultSet.getString("nome"));
				cliente.setCpf(resultSet.getString("cpf"));
				cliente.setEndereco(resultSet.getString("endereco"));
				cliente.setTelefone(resultSet.getString("telefone"));
				cliente.setId_viagem(resultSet.getInt("id_viagem"));				

			}

			System.out.println("--Pesquisa conclu?da com sucesso pelo PK usuario.");
			return cliente;
		} catch (SQLException e) {
			System.out.println("--Incorreto o PK do usuario. " + e.getMessage());
			return null;
		}
	}

	public static void update(Cliente cliente) {
		sql = "UPDATE usuario SET nome=?, cpf=?, endereco=?, telefone=?, id_viagem=? WHERE id=? ";

		try {

			PreparedStatement preparedStatement = connection.prepareStatement(sql);

			preparedStatement.setString(1, cliente.getNome());
			preparedStatement.setString(2, cliente.getCpf());
			preparedStatement.setString(3, cliente.getEndereco());
			preparedStatement.setString(4, cliente.getTelefone());
			preparedStatement.setInt(5, cliente.getId_viagem());
			preparedStatement.setInt(6, cliente.getId());

			preparedStatement.executeUpdate();

			System.out.println("--Dados atualizado com sucesso no banco de dados!!");

		} catch (SQLException e) {
			System.out.println("--Dados n?o inseridos no banco de dados. " + e.getMessage());
		}
	}
}
