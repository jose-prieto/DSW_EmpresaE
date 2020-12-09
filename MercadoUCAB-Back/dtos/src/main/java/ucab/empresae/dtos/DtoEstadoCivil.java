package ucab.empresae.dtos;

public class DtoEstadoCivil extends DtoBase {

    //Atributos
    private String estado;
    private String nombre;

    //Constructores
    public DtoEstadoCivil() {
        super();
    }

    public DtoEstadoCivil(long id) throws Exception {
        super(id);
    }

    //Getters y Setters
    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

}
