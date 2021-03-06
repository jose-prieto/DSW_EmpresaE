package ucab.empresae.entidades;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "usuario", schema = "mercadeoucab")
public class UsuarioEntity extends BaseEntity{
    //private ClienteEntity cliente;
    //private EncuestadoEntity encuestado;
    //private List<EstudioEntity> estudiosAnalista;

    public UsuarioEntity(long id){super(id);}

    public UsuarioEntity(){}

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
    @Column(name = "username")
    private String username;
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Basic
    @Column(name = "clave")
    private String clave;
    public String getClave() {
        return clave;
    }

    public void setClave(String clave) {
        this.clave = clave;
    }

    @ManyToOne
    @JoinColumn(name = "id_tipo", referencedColumnName = "id", nullable = false)
    private TipoUsuarioEntity tipousuario;
    public TipoUsuarioEntity getTipousuario() {
        return tipousuario;
    }

    public void setTipousuario(TipoUsuarioEntity tipousuario) {
        this.tipousuario = tipousuario;
    }

    /*@OneToOne(mappedBy = "usuario")
    public ClienteEntity getCliente() {
        return cliente;
    }

    public void setCliente(ClienteEntity cliente) {
        this.cliente = cliente;
    }

    @OneToOne(mappedBy = "usuario")
    public EncuestadoEntity getEncuestado() {
        return encuestado;
    }

    public void setEncuestado(EncuestadoEntity encuestado) {
        this.encuestado = encuestado;
    }

    @OneToMany(mappedBy = "analista")
    public List<EstudioEntity> getEstudiosAnalista() {
        return this.estudiosAnalista;
    }

    public void setEstudioAnalista(List<EstudioEntity> respuestas) {
        this.estudiosAnalista = respuestas;
    }*/

}
