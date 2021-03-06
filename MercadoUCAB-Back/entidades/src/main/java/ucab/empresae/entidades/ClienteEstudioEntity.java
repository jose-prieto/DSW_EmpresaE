package ucab.empresae.entidades;

import javax.persistence.*;

@Entity
@Table(name = "cliente_estudio", schema = "mercadeoucab")
public class ClienteEstudioEntity extends BaseEntity{

    public ClienteEstudioEntity(long id) {
        super(id);
    }

    public ClienteEstudioEntity() {
    }

    @Basic
    @Column(name = "estado")
    private String estado;
    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    @Basic
    @Column(name = "comentario_cliente")
    private String comentarioCliente;
    public String getComentarioCliente() {
        return comentarioCliente;
    }

    public void setComentarioCliente(String comentarioCliente) {
        this.comentarioCliente = comentarioCliente;
    }

    @ManyToOne
    @JoinColumn(name = "id_cliente", referencedColumnName = "id", nullable = false)
    private ClienteEntity cliente;
    public ClienteEntity getCliente() {
        return cliente;
    }

    public void setCliente(ClienteEntity cliente) {
        this.cliente = cliente;
    }

    @ManyToOne
    @JoinColumn(name = "id_estudio", referencedColumnName = "id", nullable = false)
    private EstudioEntity estudio;
    public EstudioEntity getEstudio() {
        return estudio;
    }

    public void setEstudio(EstudioEntity estudio) {
        this.estudio = estudio;
    }
}
