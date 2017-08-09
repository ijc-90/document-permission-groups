Tirate esta query en producción y copia el resultado a groups.json:

select array_to_json(array_agg(row_to_json(t)))
    from (
      select name, permissions::JSONB from groups
    ) t;

Cambiale el nombre al grupo "Laboratório - Revisão/Foto" para que no contenga una barra


corre el script:
node make-groups-documentation.js


se generan archivos resaltados en la carpeta groupsDocumentation para cada grupo de permisos