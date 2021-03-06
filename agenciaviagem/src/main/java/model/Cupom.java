package model;

import java.math.BigDecimal;
import java.util.Date;

public class Cupom {

	private int id;
	private String estado;
	private BigDecimal valor;
	private Date data_viagem;
	private int cod_cupom;
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getEstado() {
		return estado;
	}
	public void setEstado(String estado) {
		this.estado = estado;
	}
	public BigDecimal getValor() {
		return valor;
	}
	public void setValor(BigDecimal valor) {
		this.valor = valor;
	}
	public Date getData_viagem() {
		return data_viagem;
	}
	public void setData_viagem(Date data_viagem) {
		this.data_viagem = data_viagem;
	}
	public int getCod_cupom() {
		return cod_cupom;
	}
	public void setCod_cupom(int cod_cupom) {
		this.cod_cupom = cod_cupom;
	}
	
	
	@Override
	public String toString() {
		return "Cupom [id=" + id + ", estado=" + estado + ", valor=" + valor + ", data_viagem=" + data_viagem
				+ ", cod_cupom=" + cod_cupom + "]";
	}
	
	
}
