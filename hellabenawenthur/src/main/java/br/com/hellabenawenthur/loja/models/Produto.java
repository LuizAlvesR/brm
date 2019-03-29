package br.com.hellabenawenthur.loja.models;

import javax.persistence.Entity;

@Entity
public class Produto {
	private String titulo;
	private String descricao;
	private int paginas;
	
	public String getDescricao() {
		return descricao;
	}
	
	public int getPaginas() {
		return paginas;
	}
	
	public String getTitulo() {
		return titulo;
	}
	
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	
	public void setPaginas(int paginas) {
		this.paginas = paginas;
	}
	
	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}
	
	@Override
	public String toString() {
		return "Produto [titulo=" + titulo + ", descricao=" + descricao + ", paginas=" + paginas + "]";
	}
	
}
