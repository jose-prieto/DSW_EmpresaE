package ucab.empresae.dtos;

public class DtoTipo extends DtoBase {

    //Atributos
    private String estado;
    private String nombre;
    private String descripcion;

    //Constructores
    public DtoTipo() {
    }

    public DtoTipo(long id) throws Exception {
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

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

}
