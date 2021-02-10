package Comandos.Estudio;

import Comandos.ComandoBase;
import Mappers.GenericMapper;
import Mappers.MapperFactory;
import ucab.empresae.daos.DaoEstudio;
import ucab.empresae.daos.DaoFactory;
import ucab.empresae.dtos.DtoEstudio;
import ucab.empresae.dtos.DtoFactory;
import ucab.empresae.dtos.DtoResponse;
import ucab.empresae.entidades.EstudioEntity;
import ucab.empresae.excepciones.CustomException;

import java.util.Date;

public class ComandoAddEstudio extends ComandoBase<DtoResponse> {

    private DtoEstudio dtoEstudio;

    public ComandoAddEstudio(DtoEstudio dtoEstudio) {

        this.dtoEstudio = dtoEstudio;

    }

    @Override
    public void execute() throws Exception {

        DaoEstudio daoEstudio = DaoFactory.DaoEstudioInstancia();
        GenericMapper estudioMapper = MapperFactory.estudioMapperInstancia();
        this.dtoEstudio.setEstado("solicitado");
        this.dtoEstudio.setFechaInicio(new Date().toString());
        EstudioEntity estudio = (EstudioEntity) estudioMapper.CreateEntity(this.dtoEstudio);

        estudio = daoEstudio.insert(estudio);

        if(estudio.get_id() == 0) {
            throw new CustomException("COMEST001","El estudio no se agregó de manera correcta.");
        }else{
            this.dtoEstudio = (DtoEstudio) estudioMapper.CreateDto(estudio);
        }

    }

    @Override
    public DtoResponse getResult() throws Exception {

        execute();
        DtoResponse dtoResponse = DtoFactory.DtoResponseInstance();
        dtoResponse.setEstado("Exitoso");
        dtoResponse.setMensaje("Estudio insertado");
        dtoResponse.setObjeto(this.dtoEstudio);

        return dtoResponse;

    }

}