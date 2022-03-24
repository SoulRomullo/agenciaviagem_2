package controllers;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import dao.ClienteDao;
import model.Cliente;

@WebServlet("/ClienteUpdate")
public class AtualizarCliente extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public AtualizarCliente() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		int clienteId = Integer.parseInt(request.getParameter("clienteId"));

		Cliente cliente = ClienteDao.findByPk(clienteId);

		request.setAttribute("cliente", cliente);
		RequestDispatcher requestDispatcher = request.getRequestDispatcher("UpdateUsuario.jsp");
		requestDispatcher.forward(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {

		Cliente cliente = new Cliente();
		
		cliente.setId(Integer.parseInt(request.getParameter("id")));
		cliente.setNome(request.getParameter("nome"));
		cliente.setCpf(request.getParameter("cpf"));
		cliente.setEndereco(request.getParameter("endereco"));
		cliente.setTelefone(request.getParameter("telefone"));
		cliente.setId_viagem(Integer.parseInt(request.getParameter("id_viagem")));
		
		ClienteDao.update(cliente);
		
		CriarCliente criarCliente = new CriarCliente();
		criarCliente.doGet(request, response);
		doGet(request, response);
	}

}
