package ucab.empresae.daos;

import ucab.empresae.entidades.TipoPreguntaEntity;

import javax.persistence.EntityManager;

public class DaoTipoPregunta extends Dao<TipoPreguntaEntity> {
    private EntityManager _em;
    static DaoHandler _handler = new DaoHandler();

    public DaoTipoPregunta( )
    {
        super( _handler );
    }
}
