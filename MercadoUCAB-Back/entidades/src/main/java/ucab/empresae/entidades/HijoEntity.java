package ucab.empresae.entidades;

import javax.json.bind.annotation.JsonbDateFormat;
import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "hijo", schema = "mercadeoucab")
public class HijoEntity extends BaseEntity{

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
    @Column(name = "fecha_nacimiento")
    @JsonbDateFormat(value = "yyyy-MM-dd")
    private Date fechaNacimiento;
    public Date getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(Date fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    @ManyToOne
    @JoinColumn(name = "id_encuestado", referencedColumnName = "id", nullable = false)
    private EncuestadoEntity encuestado;
    public EncuestadoEntity getEncuestado() {
        return encuestado;
    }

    public void setEncuestado(EncuestadoEntity encuestado) {
        this.encuestado = encuestado;
    }

    @ManyToOne
    @JoinColumn(name = "id_genero", referencedColumnName = "id", nullable = false)
    private GeneroEntity genero;
    public GeneroEntity getGenero() {
        return genero;
    }

    public void setGenero(GeneroEntity genero) {
        this.genero = genero;
    }
}
