### Modo de uso

1. Tirate esta query en producción y copia el resultado a groups.json:

```select array_to_json(array_agg(row_to_json(t)))
    from (
      select name, permissions::JSONB from groups
    ) t;
    ```

2. Cambiale el nombre al grupo "Laboratório - Revisão/Foto" para que no contenga una barra

3. Convertir el MD de permisos en html en la siguiente pagina:
[dillinger](http://dillinger.io/)
(export as => styled html)
guardar el resultado en functionalities.html


4. corre el script:
```node make-groups-documentation.js```


5. se generan un archivo resaltados en la carpeta groupsDocumentation para cada grupo de permisos, con el nombre del grupo.
