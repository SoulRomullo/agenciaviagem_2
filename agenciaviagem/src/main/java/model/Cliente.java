package model;

public class Cliente {

	private int id;
	private String nome;
	private String cpf;
	private String endereco;
	private String telefone;
	private int id_viagem;
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getCpf() {
		return cpf;
	}
	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	public String getEndereco() {
		return endereco;
	}
	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}
	public String getTelefone() {
		return telefone;
	}
	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
	public int getId_viagem() {
		return id_viagem;
	}
	public void setId_viagem(int id_viagem) {
		this.id_viagem = id_viagem;
	}
	
	
	@Override
	public String toString() {
		return "Cliente [id=" + id + ", nome=" + nome + ", cpf=" + cpf + ", endereco=" + endereco + ", telefone="
				+ telefone + ", id_viagem=" + id_viagem + "]";
	}
	
}
