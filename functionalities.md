# Funcionalidades

## Seção: Cadastro Produtos 

Nessa seção se pode gerir os dados dos productos.

### Subseção: Marcas

Nessa subseção se pode gerir ou cadastrar as marcas dos produtos que operamos. A continuação segue as funcionalidades disponíveis:

-   Listar as marcas. `backoffice.brands.list`
-   Exportar a lista das marcas. `backoffice.brands.list`
-   Olhar detalhe uma marca. `backoffice.brands.show`
-   Gerar uma nova marca. `backoffice.brands.create`
-   Editar uma marca. `backoffice.brands.update`
-   Apagar uma marca. `backoffice.brands.delete`
-   Cadastrar as imagens da marca para o fluxo e-purchase _imagem default_ e para o menu do sítio _imagem em destaque do menu_:

    -   Listar as imagens das marcas. `backoffice.brands-images.list`
    -   Olhar as imagens das marca. `backoffice.brands-images.show`
    -   Carregar uma nova imagem de uma marca. `backoffice.brands-images.create`
    -   Editar uma imagem de uma marca. `backoffice.brands-images.update`
    -   Definir uma imagem de uma marca como predeterminada. `backoffice.brands-images.update`
    -   Apagar uma imagem. `backoffice.brands-images.delete`

### Subseção: Modelos

Nessa subseção se pode gerir ou cadastrar os modelos dos produtos que operamos. A continuação segue as funcionalidades disponíveis:

-   Olhar o listado de modelos cadastradas. `backoffice.models.list`
-   Olhar o detalhe de um modelo. `backoffice.models.show`
-   Exportar um listado dos modelos. `backoffice.models.list`
-   Gerar um novo modelo. `backoffice.models.create`
-   Editar um modelo. `backoffice.models.update`
-   Marcar um modelo como “default” [Preguntar a tomy como funciona esto]. `backoffice.models.update`
-   Gerar/Editar as seções a mostrar na tela dos modelos
    -   Listar seções. `backoffice.descriptions.list`
    -   Olhar detalhes de uma seção. `backoffice.descriptions.show`
    -   Gerar uma nova seção. `backoffice.descriptions.create`
    -   Editar uma seção. `backoffice.descriptions.update`
    -   Apagar uma seção. `backoffice.descriptions.delete`
-   Cadastrar/Editar as especificações dos modelos
    -   Olhar as especificações de um modelo. `backoffice.specifications.list`
    -   Gerar uma nova especificação. `backoffice.specifications.create`
    -   Editar uma nova especificação. `backoffice.specifications.update`
    -   Apagar a especificação de um modelo. `backoffice.specifications.delete`
-   Cadastrar as imagens dos modelos usada no fluxo de e-purchase _imagem default_
    -   Listar as imagens das marcas. `backoffice.models-images.list`
    -   Olhar as imagens das marca. `backoffice.models-images.show`
    -   Carregar uma nova imagem de uma marca. `backoffice.models-images.create`
    -   Editar uma imagem de uma marca. `backoffice.models-images.update`
    -   Apagar uma imagem. `backoffice.models-images.delete`
-   Apagar um modelo. `backoffice.models.destroy`

### Subseção: Produtos

Nessa subseção se pode gerir ou cadastrar os produtos especificos para cada modelo. A continuação segue as funcionalidades disponíveis:

-   Listar os produtos. `backoffice.products.list`
-   Exportar a lista dos produtos. `backoffice.products.list`
-   Olhar detalhe um produto. `backoffice.products.show`
-   Gerar um novo  produto. `backoffice.products.create`
-   Editar um produto. `backoffice.products.update`
-   Apagar um produto. `backoffice.products.delete`
-   Cadastrar as imagens dos produtos para que se mostrem em as paginas de produto do eCommerce e ePurchase:
    -   Listar as imagens dos produtos. `backoffice.products-images.list`
    -   Olhar as imagens dos produtos. `backoffice.products-images.show`
    -   Carregar uma nova imagem de um produto. `backoffice.products-images.create`
    -   Editar uma imagem de um produto. `backoffice.products-images.update`
    -   Definir uma imagem de um produto como predeterminada. `backoffice.products-images.update`
    -   Apagar uma imagem. `backoffice.products-images.delete`

### Subseção: Atributos

#### Subseção: Cores

Nessa subseção se pode gerir ou cadastrar os cores que vaõ a ser atribuídos a um produto. A continuação segue as funcionalidades disponíveis:

-   Listar os cores disponível. `backoffice.attributes-color.list`
-   Exportar a lista dos cores. `backoffice.attributes-color.list`
-   Olhar detalhe dum cores. `backoffice.attributes-color.show`
-   Gerar um novo cor. `backoffice.attributes-color.create`
-   Editar um cor. `backoffice.attributes-color.update`
-   Apagar um cor. `backoffice.attributes-color.delete`

#### Subseção: Capacidades

Nessa subseção se pode gerir ou cadastrar as capacidades que vaõ a ser atribuídos a um produto. A continuação segue as funcionalidades disponíveis:

-   Listar as capacidades disponível. `backoffice.attributes-storage.list`
-   Exportar a lista das capacidades. `backoffice.attributes-storage.list`
-   Olhar detalhe duma capacidad. `backoffice.attributes-storage.show`
-   Gerar uma nova capacidad. `backoffice.attributes-storage.create`
-   Editar uma capacidad. `backoffice.attributes-storage.update`
-   Apagar uma capacidad. `backoffice.attributes-storage.delete`

#### Subseção: Condições

Nessa subseção se pode gerir ou cadastrar as condições que vaõ a ser atribuídos a um produto. A continuação segue as funcionalidades disponíveis:

-   Listar as capacidades disponível. `backoffice.cellphone-conditions.list`
-   Exportar a lista das capacidades. `backoffice.cellphone-conditions.list`
-   Olhar detalhe duma capacidad. `backoffice.cellphone-conditions.show`
-   Gerar uma nova capacidad. `backoffice.cellphone-conditions.create`
-   Editar uma capacidad. `backoffice.cellphone-conditions.update`
-   Desligar/ligar da venda/compra uma capacidad. `backoffice.cellphone-conditions.update`
-   Fazer uma condição de compra equivalente a uma condição de venda. `backoffice.cellphone-conditions.equivalency`

### Subseção: Operadoras

Nessa subseção se pode gerir ou cadastrar as operadoras que vam a ser soportadas. A continuação segue as funcionalidades disponíveis:

-   Listar as operadoras. `backoffice.carriers.list`
-   Exportar a lista das operadoras. `backoffice.carriers.list`
-   Olhar detalhe uma operadora. `backoffice.carriers.show`
-   Gerar uma nova operadora. `backoffice.carriers.create`
-   Editar uma operadora. `backoffice.carriers.update`
-   Apagar uma operadora. `backoffice.carriers.delete`

### Subseção: Peças

Nessa subseção se pode gerir ou cadastrar as peças que vam a ser soportadas. A continuação segue as funcionalidades disponíveis:

-   Listar as peças. `backoffice.pieces.list`
-   Exportar a lista das peças. `backoffice.pieces.list`
-   Olhar detalhe uma peça. `backoffice.pieces.show`
-   Gerar uma nova peça. `backoffice.pieces.create`
-   Editar uma peça. `backoffice.pieces.update`
-   Apagar uma peça. `backoffice.pieces.delete`

### Subseção: Acessórios

Nesta subseção se pode cadastrar e alterar os acessórios dos produtos que operamos. A continuação segue as funcionalidades disponíveis:

-   Olhar o listado dos acessórios. `backoffice.accessories.list`
-   Olhar o detalhe dum acessório. `backoffice.accessories.show`
-   Criar um novo acessório. `backoffice.accessories.create`
-   Editar um acessório. `backoffice.accessories.update`
-   Apagar um acessório. `backoffice.accessories.destroy`

## Seção: Estoque

Nessa seção se pode gerir os aparelhos que ficam nos diferentes estoques

### Subseção Pronto para Stock:

Ficam os aparelhos antes de mudar a estoque

-   Olhar o listado de aparelhos. `backoffice.waiting-stock.list`
-   Mudar a verificação de aparelhos `backoffice.transactions-partner-revisions.show`
-   Adicionar ao estoque: `backoffice.waiting-stock.update`
    -   WEB
    -   LOJA `backoffice.stock-movement.include-physical-stores`
-   Alterar condição `backoffice.waiting-stock.review`
-   Alterar condição em bulk `backoffice.waiting-stock.update`

### Subseção Estoque venda:

Ficam nos aparelhos prontos para vender pela WEB

-   Olhar os aparelhos `backoffice.cellphones.list`
-   Olhar detalhe de um aparelho `backoffice.cellphones.show`
-   Editar dados dum aparelho `backoffice.cellphones.update`
-   Remover um aparelho `backoffice.cellphones.delete`
-   Remvoer muitos aparelhos em bulk `backoffice.cellphones.delete`
-   Mudar um aparelho ao estado "não conformidade" `backoffice.cellphones.move-to-non-conformity`
-   Gerar novo aparelho em estoque `backoffice.cellphones.create`
-   Exportar aparelhos no listado `backoffice.cellphones.list`
-   Importar aparelhos `backoffice.cellphones.import`
-   Beeper Selection  `backoffice.cellphones.update`
    -   Enviar a pronto para stock
    -   Mudar aparelhos para "não conformidade" `backoffice.cellphones.bulk-update`

### Subseção Não Conformidades:

Estado usado para sacar aparelhos do estoque enquanto se mudam ao próximo estado

-   Olhar os aparelhos `backoffice.non-conformity.list`
-   Mudar em bulk (Beeper selection) `backoffice.non-conformity.resolve`
    -   Enviar a pendente endereçar
    -   Enviar a Pronto para stock
    -   Enviar a Pendente avaliação - sucata
    -   Ingresar a Estoque Não Cadastrados

### Subseção Estoque não cadastrados:

Nestos estados ficam os aparelhos cujo modelo não vendemos

-   Pronto para modelos não suportados `backoffice.unsupported_cellphones.list`
    -   Exportar aparelos `backoffice.unsupported_cellphones.list`
    -   Beeper selection `backoffice.unsupported_cellphones.change_status`
        -   Mudar a estoque não cadastrados
    -   Olhar detalhe da revisão `backoffice.transactions-partner-revisions.show`
    -   Desfazer a revisão `backoffice.transactions-partner-revisions.rollback`
-   Estoque não cadastrados `backoffice.unsupported_cellphones.list`
    -   Exportar aparelhos `backoffice.unsupported_cellphones.list`
    -   Beeper Selection com export fiscal `backoffice.unsupported_cellphones.change_status`
    -   Olhar detalhe da revisão `backoffice.transactions-partner-revisions.show`

### Subseção Sucata:

Nesta subseção ficam os aparelhos que tem defeitos e não podem ser reparados

-   Descartados `backoffice.maintenance.list`
    -   Exportar `backoffice.maintenance.list`
    -   Beeper Selection `backoffice.maintenance.update`
        -   Exportar `backoffice.maintenance.list`
        -   Exportar para nota fiscal `backoffice.maintenance.update`
        -   Enviar a Sucata `backoffice.maintenance.update`
        -   Enviar a Sucata Pendente de facturação `backoffice.maintenance.update`
        -   Enviar a manutenção externa `backoffice.maintenance.update`
    -   Olhar revisão `backoffice.transactions-partner-revisions.show`
-   Pendente a Endereçar Sucata `backoffice.pending-scrap.list`
    -   Exportar `backoffice.pending-scrap.list`
    -   Beeper Selection `backoffice.pending-scrap.update`
        -   Enviar a Sucata Funcional `backoffice.maintenance.bulk-update`
        -   Enviar a Estoque Sucata \*\*
    -   Olhar revisão `backoffice.transactions-partner-revisions.show`
    -   Mudar a sucata funcional `backoffice.pending-scrap.update`
-   Sucata Funcional `backoffice.functional-scrap.list`
    -   Exportar `backoffice.functional-scrap.list`
    -   Beeper Selection `backoffice.functional-scrap.update`
        -   Exportar `backoffice.functional-scrap.update`
        -   Enviar a Sucata Pendente de facturação `backoffice.functional-scrap.update`
    -   Enviar a Estoque Sucata `backoffice.functional-scrap.update`
-   Estoque Sucata `backoffice.scrap.list`
    -   Exportar `backoffice.scrap.list`
    -   Beeper Selection `backoffice.scrap.update`
        -   Exportar `backoffice.scrap.update`
        -   Exportar para nota fiscal `backoffice.scrap.update`
        -   Enviar a Sucata Funcional `backoffice.scrap.update`
        -   Enviar a Sucata Pendente de facturação `backoffice.scrap.update`
    -   Olhar revisão `backoffice.transactions-partner-revisions.show`
-   Pendente a Endereçar Sucata desmontada `backoffice.waiting-dismantled-scrap.list`
    -   Exportar `backoffice.waiting-dismantled-scrap.list`
    -   Beeper Selection `backoffice.waiting-dismantled-scrap.update`
        -   Exportar `backoffice.waiting-dismantled-scrap.update`
        -   Enviar a Estoque sucata desmontada `backoffice.waiting-dismantled-scrap.update`
    -   Olhar revisão `backoffice.transactions-partner-revisions.show`
-   Estoque Sucata Desmontada `backoffice.dismantled-scrap.list`
    -   Export `backoffice.dismantled-scrap.list`
    -   Beeper Selection `backoffice.dismantled-scrap.update`
        -   Exportar `backoffice.dismantled-scrap.update`
        -   Exportar para nota fiscal `backoffice.dismantled-scrap.update`
        -   Enviar a Sucata Pendente de Facturação `backoffice.dismantled-scrap.update`
    -   Olhar revisão `backoffice.transactions-partner-revisions.show`
-   Sucata Pendente de facturação `backoffice.pending-invoicing-scrap.list`
    -   Exportar `backoffice.pending-invoicing-scrap.list`
    -   Beeper Selection `backoffice.pending-invoicing-scrap.update`
        -   Exportar `backoffice.pending-invoicing-scrap.update`
        -   Exportar para nota fiscal `backoffice.pending-invoicing-scrap.update`
        -   Mudar para estado prévio `backoffice.pending-invoicing-scrap.update`
    -   Olhar revisão `backoffice.transactions-partner-revisions.show`

### Subseção Devolução ao Parceiro:

Nesta subseção ficam os aparelhos que tem divergencia e tem que ser devolvidos aos parceiros

-   Pronto para Pendente Devolução ao Parceiro `backoffice.transactions-partner-return.list`
    -   Beeper Selection `backoffice.transactions-partner-return.move`
        -   Exportar
        -   Mudar
    -   Exportar `backoffice.transactions-partner-return.list`
    -   Olhar Detalhe `backoffice.transactions-partner-return.show`
    -   Desfazer revisão `backoffice.transactions-partner-revisions.rollback`
    -   Olhar revisão `backoffice.transactions-partner-revisions.show`
-   Estoque devoluções a Parceiros `backoffice.transactions-partner-return.list`
    -   Olhar detalhe `backoffice.transactions-partner-return.show`
    -   Olhar revisão `backoffice.transactions-partner-revisions.show`
    -   Exportar `backoffice.transactions-partner-return.list`
    -   Beeper Selection `backoffice.transactions-partner-return.move`
        -   Exportar itens
        -   Enviar a "Pendente avaliação sucata"
        -   Enviar a "Devolvido ao Parceiro"
        -   Enviar a "Pendente Endereçar" `backoffice.transactions-partner-return.bulk-movement`
-   Devolvido ao Parceiro
    -   Olhar detalhe `backoffice.transactions-partner-return.show`
    -   Olhar revisão `backoffice.transactions-partner-revisions.show`


## Seção: Pricing

Nessa seção se pode gerir preço, estoque, imagens dos trocables. A continuação segue as funcionalidades disponíveis:

### Subseção geral:

Trocables dos venda e compra

-   Olhar o listado. `backoffice.trocables.list`
-   Exportar o listado. `backoffice.trocables.list`
-   Ver detalhes de um trocable. `backoffice.trocables.show`
-   Editar um trocable (Destaque-Activar/desativar transações-Editar preço-Infinite stock). `backoffice.trocables.update`
-   Editar preços. `backoffice.trocables.update`
-   Importaçao o listado de preços. `backoffice.trocables.update`
-   Destaque trocable `backoffice.trocables.update`
-   Ativar/desastivar transações `backoffice.trocables.update`
-   Ver trocables em stock: `backoffice.cellphones.list`
-   Cadastrar as imagens dos trocables para que se mostrem em as paginas de produto do eCommerce e ePurchase. Se não tiver atribuído ninguma imagem, vai a mostrar as imagems do produto:
    -   Listar as imagens do trocable. `backoffice.trocables-images.list`
    -   Olhar as imagens dos trocable. `backoffice.trocables-images.show`
    -   Carregar uma nova imagem dum trocable. `backoffice.trocables-images.create`
    -   Editar uma imagem dum trocable. `backoffice.trocables-images.update`
    -   Definir uma imagem dum trocable como predeterminada. `backoffice.trocables-images.update`
    -   Apagar uma imagem. `backoffice.trocables-images.delete`

### Subseção venda:

Trocables dos venda

-   Olhar o listado. `backoffice.trocables-ecommerce.list`
-   Exportar o listado. `backoffice.trocables-ecommerce.list`
-   Ver detalhes de um trocable. `backoffice.trocables-ecommerce.show`
-   Editar um trocable (Destaque-Activar/desativar transações-Editar preço-Infinite stock-Club Trocafone). `backoffice.trocables-ecommerce.update`
-   Editar preços. `backoffice.trocables-ecommerce.update`
-   Infinite stock `backoffice.trocables-ecommerce.update`
-   Importaçao o listado de preços. `backoffice.trocables-ecommerce.update`
-   Destaque trocable `backoffice.trocables-ecommerce.update`
-   Ativar/desastivar transações `backoffice.trocables-ecommerce.update`
-   Ver trocables em stock: `backoffice.cellphones.list`
-   Cadastrar as imagens dos trocables para que se mostrem em as paginas de produto do eCommerce e ePurchase. Se não tiver atribuído ninguma imagem, vai a mostrar as imagems do produto:
    -   Listar as imagens do trocable. `backoffice.trocables-images.list`
    -   Olhar as imagens dos trocable. `backoffice.trocables-images.show`
    -   Carregar uma nova imagem dum trocable. `backoffice.trocables-images.create`
    -   Editar uma imagem dum trocable. `backoffice.trocables-images.update`
    -   Definir uma imagem dum trocable como predeterminada. `backoffice.trocables-images.update`
    -   Apagar uma imagem. `backoffice.trocables-images.delete`

### Subseção compra:

Trocables dos compra

-   Olhar o listado. `backoffice.trocables-purchase.list`
-   Exportar o listado. `backoffice.trocables-purchase.list`
-   Ver detalhes de um trocable. `backoffice.trocables-purchase.show`
-   Editar um trocable (Destaque-Activar/desativar transações-Editar preço). `backoffice.trocables-purchase.update`
-   Editar preços. `backoffice.trocables-purchase.update`
-   Importaçao o listado de preços. `backoffice.trocables-purchase.update`
-   Destaque trocable `backoffice.trocables-purchase.update`
-   Ativar/desativar transações `backoffice.trocables-purchase.update`
-   Ver trocables em stock: `backoffice.cellphones.list`
-   Cadastrar as imagens dos trocables para que se mostrem em as paginas de produto do eCommerce e ePurchase. Se não tiver atribuído ninguma imagem, vai a mostrar as imagems do produto:
    -   Listar as imagens do trocable. `backoffice.trocables-images.list`
    -   Olhar as imagens dos trocable. `backoffice.trocables-images.show`
    -   Carregar uma nova imagem dum trocable. `backoffice.trocables-images.create`
    -   Editar uma imagem dum trocable. `backoffice.trocables-images.update`
    -   Definir uma imagem dum trocable como predeterminada. `backoffice.trocables-images.update`
    -   Apagar uma imagem. `backoffice.trocables-images.delete`

## Seção: Transporte 

Nessa seção pode ver e filtrar as transaçoes em fluxo de logistica reversa

### Subseção: Pendente de retirar

Transaçoes listas para coletar nas lojas partner.

- Listar/filtrar as transaçoes. `TODO: permiso`
- Mover transaçoes para "Por entrar". `TODO: permiso`
- Mover transaçoes para "Extravios". `TODO: permiso`
- Exportar o listagem. `TODO: permiso`

### Subseção: Coleta solicitada

Transaçoes para as cuales a coleta já foi solicitada.

- Listar/filtrar as transaçoes. `TODO: permiso`
- Mover transaçoes para "Por entrar". `TODO: permiso`
- Mover transaçoes para "Extravios". `TODO: permiso`
- Exportar o listagem. `TODO: permiso`

### Subseção: Coleta em rota

Transaçoes para as cuales o transportadora esta em ruta de coleta.

- Listar/filtrar as transaçoes. `TODO: permiso`
- Mover transaçoes para "Por entrar". `TODO: permiso`
- Mover transaçoes para "Extravios". `TODO: permiso`
- Exportar o listagem. `TODO: permiso` 

### Subseção: Insucesso - falta produto

Transaçoes que não foram coletadas na loja por error ajeno a transportadora.

### Subseção: Extraviados pela transportadora

Transaçoes que foram perdidas/roubadas no camino a Trocafone. Responsabilidade de Transportista.

### Subseção: Por entrar

Transaçoes que chegaron no CD e fican pendentes de revisão.

### Subseção: Range/estoque etiquetas

Configuracão dos rangos de etiquetas para os carriers de logistica direta.

### Subseção: Regras de coleta

Configuracão e visualizacão de regras de coleta de logistica reversa.


## Seção: Transações 

### Subseção Vendas:

Ordens de venta

-   Olhar o listado. `backoffice.transactions.list`
-   Exportar o listado. `backoffice.transactions.export`
-   Ver detalhes de uma ordem. `backoffice.transactions.show`
-   Editar uma ordem. `backoffice.transactions.update`
-   Editar o tempo de garantia em uma ordem. `backoffice.transactions.warranty-edit`
-   Atualizar status de uma ordem. `backoffice.transactions.status-update`
-   Cancelar uma ordem. `backoffice.transactions.cancellation`
-   Marcar uma ordem como Charged-Back. `backoffice.transactions.cancellation`
-   Editar uma ordem no checkout quando ainda não se pagou. `backoffice.transactions.update`
-   Olhar o historial da ordem. `backoffice.transactions.history`
-   Adicionar um comentario à ordem. `backoffice.transaction_observations.create`
-   Olhar os comentarios de uma ordem. `backoffice.transaction_observations.list`
-   Ver detalhes de um comentario. `backoffice.transaction_observations.show`
-   Editar um comentario. `backoffice.transaction_observations.update`

### Subseção Vendas MELI/Groupon:

Carregar uma ordem de Mercadolivre ou Groupon `backoffice.transactions.validate-promo-code` `backoffice.transactions.create_ _backoffice.transactions.create-other-origin`

### Subseção Carregar Nova Venda:

Criar uma ordem desde o checkout. `backoffice.transactions.create`

### Subseção Compras:

Ordens de compra por o site web

-   Olhar o listado. `backoffice.transactions-purchase.list`
-   Exportar o listado. `backoffice.transactions-purchase.export`
-   Ver detalhes de uma ordem. `backoffice.transactions-purchase.show`
-   Editar uma ordem. `backoffice.transactions-purchase.update`
-   Atualizar status de uma ordem. `backoffice.transactions-purchase.update-status`
-   Marcar uma ordem como recebeda. `backoffice.transactions-purchase-arrivals.receive`
-   Olhar o historial da ordem. `backoffice.transactions-purchase.history`

### Subseção: Compras partner 

Listado de transaçoes que entran por o fluxo trade-in.

- Olhar o listado. `backoffice.transactions-partner.list`
- Exportar o listado. `backoffice.transactions-partner.list`
- Editar uma ordem. `backoffice.transactions-partner.update`
- Cancelar uma ordem. `backoffice.transactions-partner.update`
- Revivir ordens canceladas. `backoffice.transactions-partner.revive-cancelled`
- Olhar fotos dos telefones tiradas nas lojas. `backoffice.transactions-partner.photos`
- Ver historial das ordens. `backoffice.transactions-partner.history`
- Ver voucher gerado para o cliente. `backoffice.transactions-partner.contract`
- Ignorar/ativar chequeo da iCloud. `backoffice.transactions-partner.update-icloud-check`


## Seção: Lojas

Nessa seção se pode gerir lojas, stock das lojas, vendedores, vendas, entregas y devoluções.

### Subseção Lojas Trocafone:

-   Olhar o listado. `backoffice.store.list`
-   Exportar o listado. `backoffice.store.list`
-   Criar uma loja. `backoffice.store.create`
-   Ver detalhes de uma loja. `backoffice.store.show`
-   Editar uma loja. `backoffice.store.edit` e `backoffice.store.update`
-   Remover uma loja. `backoffice.store.delete`

### Subseção Vendedores das lojas:

-   Olhar o listado. `backoffice.store.sellers.list`
-   Criar um vendedor. `backoffice.store.seller.update` e `backoffice.store.seller.create`
-   Editar um vendedor. `backoffice.store.seller.update`
-   Desativar um vendedor para que não poda fazer mais vendas. `backoffice.store.seller.deactivate`

### Subseção Pronto estoque venda lojas:

-   Olhar o listado. `backoffice.stock.cellphones.sell.store.list`
-   Exportar o listado. `backoffice.stock.cellphones.sell.store.export`
-   Enviar a loja. `backoffice.stock.cellphones.sell.store.update`
-   Enviar a stock. `backoffice.store-waiting.move-back`

### Subseção Estoque venda lojas:

-   Olhar o listado. `backoffice.stock.cellphones.store.list`
-   Exportar o listado. `backoffice.stock.cellphones.store.export`
-   Enviar a reparo. `backoffice.stock.cellphones.sell.store.update`

### Subseção Vendas nas lojas:

-   Olhar o listado. `backoffice.transactions.store.list`
-   Exportar o listado. `backoffice.transactions.store.export`
-   Ver detalhes de uma transaçon. `backoffice.transactions.store.list`
-   Ver histórico de uma transaçon. `backoffice.transactions.store.history`
-   Cancelar uma transaçon. `backoffice.transactions.store.cancel`

### Subseção Entrega:

-   Olhar o listado. `backoffice.transactions-delivery-store.list`
-   Exportar o listado. `backoffice.transactions-delivery-store.list`
-   Ver detalhes de uma transaçon. `backoffice.transactions-delivery-store.show`
-   Atribuir telefone e envio. `backoffice.transactions-delivery-store.update`
-   Cancelar uma transaçon. `backoffice.transactions.cancellation`

### Subseção Carregar nova venda:

Nessa subseçao se pode generar uma venda, solo para casos especiais.

-   Olhar o pantalla. `backoffice.transactions.check-trocable-price`
-   Crear uma transaçon. `backoffice.transactions.check-trocable-price`

### Subseção Nova venda:

Nessa subseçao se pode generar uma venda.

-   Olhar o pantalla. `backoffice.submodule-trocastore.index`

### Subseção Pendente envio CD:

-   Olhar o listado. `backoffice.stores.waiting-facility.list`
-   Exportar o listado. `backoffice.stores.waiting-facility.list`
-   Enviar a pendente a endereçar. `backoffice.stores.waiting-facility.update`

## Seção: Revisão bloqueio iCloud

Nesta seção se mostra o fluxo de aparelhos para revisar o bloqueio de iCloud

### Subseção: Revisão pendente

Nesta subseção se mostram os aparelhos que ainda não foram revisados

-   Olhar listado `backoffice.check-lock.pending.list`
-   Olhar histórico `backoffice.check-lock.history`
-   Marcar como aparelho Bloqueado e mudar a "notificar loja" `backoffice.check-lock.move-to-pending-notification-to-store`
-   Marcar como aparelho Desbloqueado e mudar para Revisados `backoffice.check-lock.move-to-reviewed`

### Subseção: Notificar Loja

Nesta subseção se mostram os aparelhos bloqueados que ainda não foram notificados na loja

-   Olhar Listado `backoffice.check-lock.pending_notification_to_store.list`
-   Marcar como loja notificada `backoffice.check-lock.move-to-store-notified`
-   Marcar aparelho como desbloqueado e mudar para Revisados `backoffice.check-lock.move-to-reviewed`
-   Mostrar histórico `backoffice.check-lock.move-to-reviewed`

### Subseção: Loja notificada

Nesta subseção ficam os aparelhos bloqueados que já foram notificados na loja

-   Olhar listado `backoffice.check-lock.store-notified.list`
-   Mudar para pendente `backoffice.check-lock.move-to-pending`
-   Mostrar histórico `backoffice.check-lock.move-to-reviewed`
-   Marcar como aparelho Desbloqueado e mudar para Revisados `backoffice.check-lock.move-to-reviewed`


## Seção: Delivery [Kaiju]

Transaçoes no fluxo de logistica direta.

### Subseção: Correios :: Pendentes
### Subseção: Correios :: Preparados
### Subseção: Correios :: Em transito
### Subseção: Motoboy :: Pendentes
### Subseção: Motoboy :: Preparados
### Subseção: Motoboy :: Em transito


## Seção: Notas Fiscais

### Subseção: NF de Saída Web

Nessa subseção se pode olhar as transações de venda na web, que ficam prontas para gerar notas fiscais.
Funcionalidades disponíveis:

-   Listar as transações prontas para gerar NF mas não exportadas ainda: "pendente emissão". `backoffice.transactions-fiscal-note-ecommerce.list`
-   Exportar as transações e mudar-las á próximo lista "pendente importação". `backoffice.transactions-fiscal-note-ecommerce.list`
-   Listar as transações que já foram exportadas, e estão "pendente de importação". `backoffice.transactions-fiscal-note-ecommerce.list`
-   Mudar transações de "pendente importação" a "pendente emissão" para poder exportar de novo. `backoffice.transactions-fiscal-note-ecommerce.update`
-   Olhar detalhe da transação. `backoffice.transactions-fiscal-note-ecommerce.show`
-   Importar um ZIP com XMLs das notas geradas: depois os XMLs vão a ser procesados e as transações não vai a ficar mais nesta tela. `backoffice.transactions-fiscal-note-ecommerce.update`

### Subseção: NF de Saída Loja

Nessa subseção se pode olhar as transações de venda nas lojas, que ficam prontas para gerar notas fiscais.
Funcionalidades disponíveis:

-   Listar as transações prontas para gerar NF mas não exportadas ainda: "pendente emissão". `backoffice.transactions-fiscal-note-ecommerce.list`
-   Exportar as transações e mudar-las á próximo lista "pendente importação". `backoffice.transactions-fiscal-note-ecommerce.list`
-   Listar as transações que já foram exportadas, e estão "pendente de importação". `backoffice.transactions-fiscal-note-ecommerce.list`
-   Mudar transações de "pendente importação" a "pendente emissão" para poder exportar de novo. `backoffice.transactions-fiscal-note-ecommerce.update`
-   Olhar detalhe da transação. `backoffice.transactions-fiscal-note-ecommerce.show`
-   Importar um ZIP com XMLs das notas geradas: depois os XMLs vão a ser procesados e as transações não vai a ficar mais nesta tela. `backoffice.transactions-fiscal-note-ecommerce.update`

### Subseção: NF de Saída Pendentes - Devoluções

Nessa subseção se pode olhar as transações de entregas de aparelhos por devoluções.
Funcionalidades disponíveis:

-   Listar as transações prontas para gerar NF. `backoffice.transactions-fiscal-note-ecommerce.list`
-   Exportar as transações. `backoffice.transactions-fiscal-note-ecommerce.list`
-   Olhar detalhe da transação. `backoffice.transactions-fiscal-note-ecommerce.show`
-   Marcar notas como emitidas em bulk. `backoffice.transactions-fiscal-note-ecommerce.update`

### Subseção: NF de Entrada Pendentes

Nessa subseção se pode olhar as transações de compra, que ficam prontas para gerar notas fiscais.
Funcionalidades disponíveis:

-   Listar as transações prontas para gerar NF mas não exportadas ainda: "pendente emissão". `backoffice.transactions-fiscal-note-ecommerce.list`
-   Exportar as transações e mudar-las á próximo lista "pendente importação". `backoffice.transactions-fiscal-note-ecommerce.list`
-   Listar as transações que já foram exportadas, e estão "pendente de importação". `backoffice.transactions-fiscal-note-ecommerce.list`
-   Mudar transações de "pendente importação" a "pendente emissão" para poder exportar de novo. `backoffice.transactions-fiscal-note-ecommerce.update`
-   Olhar detalhe da transação. `backoffice.transactions-fiscal-note-ecommerce.show`
-   Importar um ZIP com XMLs das notas geradas: depois os XMLs vão a ser procesados e as transações não vai a ficar mais nesta tela. `backoffice.transactions-fiscal-note-ecommerce.update`
-   

### Subseção: NF de Devoluções Pendentes

Nessa subseção se pode olhar as transações de recepção de aparelhos por devoluções.
Funcionalidades disponíveis:

-   Listar as transações prontas para gerar NF. `backoffice.transactions-fiscal-note-returns.list`
-   Exportar as transações. `backoffice.transactions-fiscal-note-returns.list`
-   Exportar dados do contatos. `backoffice.transactions-fiscal-note-returns.list`
-   Olhar detalhe da transação. `backoffice.transactions-fiscal-note-returns.show`
-   Marcar notas como emitidas em bulk. `backoffice.transactions-fiscal-note-returns.update`

## Seção: Recepções

### Subseção: Enviar código

-   Olhar o listado. `backoffice.transactions-purchase-pending-code.list`
-   Export o listado. `backoffice.transactions-purchase-pending-code.export`
-   Olhar o detalhe da transaçõe. `backoffice.transactions-purchase-pending-code.show`
-   Relatório codigo de postagem enviado. `backoffice.transactions-purchase-pending-code.sent`

### Subseção: Enviar Motoboy

-   Olhar o listado. `backoffice.transactions-purchase-pending-motoboy.list`
-   Export o listado. `backoffice.transactions-purchase-pending-motoboy.list`
-   Olhar o detalhe da transaçõe. `backoffice.transactions-purchase-pending-motoboy.show`
-   Relatório codigo de postagem enviado. `backoffice.transactions-purchase-pending-motoboy.sent`

### Subseção: Por entrar

-   Olhar o listado. `backoffice.transactions-purchase-pending-arrivals.list`
-   Export o listado. `backoffice.transactions-purchase-pending-arrivals.list`
-   Olhar o detalhe da transaçõe. `backoffice.transactions-purchase-pending-arrivals.show`
-   Relatório recebido telefone. `backoffice.transactions-purchase-pending-arrivals.receive`

### Subseção: A revisar

-   Olhar o listado. `backoffice.transactions-purchase-revisions.list`
-   Export o listado. `backoffice.transactions-purchase-revisions.list`
-   Olhar detalhe da telefone. `backoffice.transactions-purchase-revisions.show`
-   Realizar revisión. `backoffice.transactions-purchase-revisions.review`

### Subseção: Nova Oferta

#### Enviadas

-   Olhar o listado. `backoffice.transactions-purchase-counteroffer.list`
-   Export o listado. `backoffice.transactions-purchase-counteroffer.list`
-   Cancelar oferta. `backoffice.transactions-purchase-counteroffer.update`

#### Aceptadas

-   Olhar o listado. `backoffice.transactions-purchase-counteroffer.list`
-   Export o listado. `backoffice.transactions-purchase-counteroffer.list`
-   Marca a ser paga. `backoffice.transactions-purchase-counteroffer.update`
-   Marca a ser paga o bulk. `backoffice.transactions-purchase-counteroffer.update`

#### Rechazadas

-   Olhar o listado. `backoffice.transactions-purchase-counteroffer.list`
-   Export o listado. `backoffice.transactions-purchase-counteroffer.list`
-   Marca a ser devolvida. `backoffice.transactions-purchase-counteroffer.update`
-   Marca a ser devolvida o bulk. `backoffice.transactions-purchase-counteroffer.update`

#### Canceladas

-   Olhar o listado. `backoffice.transactions-purchase-counteroffer.list`
-   Export o listado. `backoffice.transactions-purchase-counteroffer.list`
-   Marca a ser devolvida. `backoffice.transactions-purchase-counteroffer.update`
-   Marca a ser devolvida o bulk. `backoffice.transactions-purchase-counteroffer.update`

#### Expiradas

-   Olhar o listado. `backoffice.transactions-purchase-counteroffer.list`
-   Export o listado. `backoffice.transactions-purchase-counteroffer.list`
-   Marca a ser devolvida. `backoffice.transactions-purchase-counteroffer.update`
-   Marca a ser devolvida o bulk. `backoffice.transactions-purchase-counteroffer.update`

### Subseção: A pagar

-   Olhar o listado. `backoffice.transactions-purchase-payments.list`
-   Export o listado. `backoffice.transactions-purchase-payments.list`
-   Export o listado em pdf. `backoffice.transactions-purchase-payments.list`
-   Olhar o detalhe da transaçao. `backoffice.transactions-purchase-payments.show`
-   Marca como pago. `backoffice.transactions-purchase-payments.update`

### Subseção: Para Devoluçao

-   Olhar o listado. `backoffice.transactions-purchase-returns.list`
-   Export o listado. `backoffice.transactions-purchase-returns.list`
-   Olhar o detalhe da transaçao. `backoffice.transactions-purchase-returns.show`
-   Marca como enviado. `backoffice.transactions-purchase-returns.update`
-   Marca como devuleto. `backoffice.transactions-purchase-returns.update`


## Seção: Recepções Partner

### Subseção: Revisores

Nessa subseção pode olhar y cadastrar os revisores. São as pessoas responsáveis de la revisão do aparelho. Não são usuários de backoffice y so tem os dados de Nome, Sobrenome, Posição e se é ativo.
Funcionalidades disponíveis:

-   Listar os revisores. `backoffice.reviewers.list`
-   Exportar a lista dos revisores. `backoffice.reviewers.list`
-   Ver os datos de um revisor. `backoffice.reviewers.show`
-   Cadastrar um novo revisor. `backoffice.reviewers.create`
-   Editar os dados de um revisor. `backoffice.reviewers.update`
-   Excluir um revisor. `backoffice.reviewers.delete`

### Subseção: A revisar

Nessa subseção pode olhar os aparelhos, comprados a o parceiro, que estan pendentes de revisão.
Pode escolher un aparelho da lista para ir à tela de revisão, o usar o botão de Ingresar Aparelho para pesquisar por IMEI.
Depois de preencher o formulário de revisão, mostra o resultado da revisão com o destino do aparelho.
Funcionalidades disponíveis:

-   Listar as transações pendentes de revisão. `backoffice.transactions-partner-arrivals.list`
-   Pesquisar um aparelho para revisão con o botão Ingresar Aparelho. `backoffice.transactions-partner-revisions.review`
-   Fazer a revisão de um aparelho. `backoffice.transactions-partner-revisions.review`
-   Concluida a revisão, ver os resultados da mesma. `backoffice.transactions-partner-revisions.show`
-   Poder alterar o IMEI de um aparelho no formulário da revisão. `backoffice.transactions-partner-revisions.change-imei`

### Subseção: A revisar - Orfas

Nessa subseção pode olhar os aparelhos que estan pendentes de revisão, mais su IMEI foi usado para outro aparelho.
Geralmente sao casos nos que os aparelhos de dois ordenes trocaram-se, y alguém tem que resolver-o.
O formulário de revisão e o mesmo que o formulário de a seção _A revisar_.
Funcionalidades disponíveis:

-   Listar as transações neste estado. `backoffice.transactions-partner-revisions.review-duplicated`
-   Fazer a revisão de um aparelho. `backoffice.transactions-partner-revisions.review`

### Subseção: Diferencias de Revisiones

Nessa sebseção pode olhar todas as revisões de compras aos parceiros y comparar o que declarou o parceiro con os resultados de a revisão.
Funcionalidades disponíveis:

-   Listar as divergências das revisões. `backoffice.transaction-partner-revision-diff.list`
-   Exportar as divergências das revisões. `backoffice.transaction-partner-revision-diff.list`
-   Ver o detalhe de uma divergência. `backoffice.transaction-partner-revision-diff.show`

### Subseção: Pronto para tirar foto

Nessa subseção pode olhar os aparelhos que precisam fotos depois de a revisão.
É preciso tirar pelo menos 3 fotos de um aparelho para terminar este paso.
Tambem pode pesquizar um aparelho por IMEI usando o botão de Ingresar aparato.
Funcionalidades disponíveis:

-   Listas os aparelhos. `backoffice.transactions-partner-revisions.review`
-   Ingresar aparato usando IMEI. `backoffice.transactions-partner-revisions.review`
-   Ver as fotos que tem cada aparelho. `backoffice.transactions-partner-revisions.review`
-   Tirar fotos e editar a observação da revisão. `backoffice.transactions-partner-revisions.review`
-   Terminar o pocesso de tirar fotos (na mesma tela onde tira as fotos). `backoffice.transactions-partner-revisions.review`
-   Desfazer a revisão. `backoffice.transactions-partner-revisions.rollback`

### Subseção: Control da Divergência

-   Olhar listado `backoffice.transactions-partner-revisions.divergence-control`
-   Controlar Divergência `backoffice.transactions-partner-revisions.divergence-control`

### Subseção: Revisões canceladas

-   Olhar listado `backoffice.transactions-partner-revisions.rollback`
-   Enviar a revisar `backoffice.transactions-partner-revisions.rollback`

## Seção: Reparo

Nessa seção se encontran os aparelhos que começam uma manutenção o estao sendo reparados.

### Subseção: Verificação de aparelhos

Nessa subseção pode alterar os dados do aparelho manualmente. Não é recomendado usá-lo devido a que gera problemas nos relatorios.
Pode alterar o produto, IMEI e condição de uma manutenção.

-   Listar os aparelhos pendentes de modificações. `backoffice.bgh_maintenance_review.list`
-   Modificar os dados e mudar ao aparelho ao estado que estava previamente. `backoffice.bgh_maintenance_review.update`

### Subseção: Pendente a Endereçar

Nessa subseção vai parar os aparelhos que comenzan o proceso de manutenção. No relatorio se pode olhar los resultados de las revições.

-   Listar as manutenções. `backoffice.maintenance.list`
-   Exportar o relatorio de as manutenções. `backoffice.maintenance.list`
-   Beeper selection. `backoffice.maintenance.update`
-   Olhar o resultado da revisão. `backoffice.transactions-partner-revisions.show`
-   Desfazer a revisão e mudar para fazer uma nova revisão `backoffice.transactions-partner-revisions.rollback`

#### Subseção Pendente a Endereçar: Beeper selection

-   Exportar itens seleccionados
-   Enviar a Estoque a Reparar `backoffice.maintenance.update`
-   Enviar a Reparação `backoffice.maintenance.update`
-   Enviar a Pronto para Manutenção Externa `backoffice.maintenance.update`

### Subseção: Estoque a Reparar

Nessa subseção se encontram as manutenções em stock, pendentes de ser reparadas.

-   Listar as manutenções. `backoffice.maintenance.list`
-   Exportar o relatorio de as manutenções. `backoffice.maintenance.list`
-   Beeper selection. `backoffice.maintenance.update`
-   Olhar o resultado da revição. `backoffice.transactions-partner-revisions.show`
-   Mudar um aparelho para Verificação de aparelhos `backoffice.maintenance.update`

#### Subseção Estoque a Reparar: Beeper selection

-   Exportar itens seleccionados
-   Enviar a Pronto para Manutenção Externa `backoffice.maintenance.update`
-   Enviar a Pronto para Reparo Externo - IPlace `backoffice.maintenance.update`
-   Enviar a Reparação `backoffice.maintenance.update`
-   Enviar a Pendente a Endereçar `backoffice.maintenance.update`

### Subseção: Em Reparação

Nessa subseção se pode olhar as manutenções que sao reparadas agora.

-   Listar as manutenções. `backoffice.maintenance.list`
-   Exportar o relatorio de as manutenções. `backoffice.maintenance.list`
-   Beeper selection. `backoffice.maintenance.update`
-   Revição reparação. `backoffice.maintenance.update`
-   Olhar o resultado da revição. `backoffice.transactions-partner-revisions.show`
-   Mudar um aparelho para Verificação de aparelhos `backoffice.maintenance.update`

#### Subseção Em Reparação: Beeper selection

-   Exportar itens seleccionados
-   Enviar a Sucata Funcional `backoffice.maintenance.update`
-   Exportar itens selecionados `backoffice.maintenance.update`

#### Subseção Em Reparação: Revição reparação

Nessa tela ha um formulário e pode mudar o aparelho para um dos seguintes estados.

-   Enviar a Aguardando Peçãs. `backoffice.maintenance.update`
-   Enviar a Pendente Availação Sucata. `backoffice.maintenance.update`
-   Enviar a Pronto Limpeza e CQS. `backoffice.maintenance.update`

### Subseção: Aguardando Peças

Nessa tela pode olhar os aparelhos que precisam peçãs para finalizar su reparação.

-   Listar as manutenções. `backoffice.maintenance.list`
-   Exportar o relatorio de as manutenções. `backoffice.maintenance.list`
-   Enviar a revição. `backoffice.maintenance.update`

### Subseção: Reparo Externo

Nessa subseção fica o fluxo de envio de aparelhos para reparo externo a trocafone.

-   Tela Reparadores Externos `backoffice.maintenance.external-repairers.list`
    -   Olhar Listado `backoffice.maintenance.external-repairers.list`
    -   Gerar novo Reparador `backoffice.maintenance.external-repairers.create`
    -   Olhar Reparador `backoffice.maintenance.external-repairers.show`
    -   Editar Reparador `backoffice.maintenance.external-repairers.edit`
    -   Excluir Reparador `backoffice.maintenance.external-repairers.delete`
-   Tela Pronto para Manutenção Externa
    -   Olhar Listado `backoffice.waiting-external-repair.list`
    -   Olhar o resultado da revisão. `backoffice.transactions-partner-revisions.show`
    -   Beeper Selection `backoffice.waiting-external-repair.update`
        -   Enviar a Manutenção Externa
        -   Enviar a Pendente endereçar
        -   Exportar
        -   Exportar para nota fiscal
        -   Envar a pendente avaliação sucata `backoffice.maintenance.bulk-update`
-   Tela Manutenção Externa
    -   Olhar Listado `backoffice.external-repair.list`
    -   Olhar o resultado da revisão. `backoffice.transactions-partner-revisions.show`
    -   Mudar a sucata funcional `backoffice.external-repair.update`
    -   Beeper Selection `backoffice.waiting-external-repair.update`
        -   Exportar
        -   Enviar a pendente avaliação sucata
        -   Enviar a pronto limpieza e CQS
-   Tela Pronto para Reparo Externo - IPlace
    -   Olhar Listado `backoffice.waiting-warranty-claim.list`
    -   Olhar o resultado da revisão. `backoffice.transactions-partner-revisions.show`
    -   Exportar `backoffice.waiting-warranty-claim.list`
    -   Beeper Selection `backoffice.waiting-external-repair.update`
        -   Exportar
        -   Enviar a Reparo Externo IPlace
        -   Enviar a Pendente Endereçar
        -   Enviar a Pendente Avaliação Sucata `backoffice.maintenance.bulk-update`
-   Tela Reparo externo - IPlace
    -   Olhar o listado. `backoffice.warranty-claim.list`
    -   Olhar o resultado da revisão. `backoffice.transactions-partner-revisions.show`
    -   Mudar a sucata funcional `backoffice.warranty-claim.update`
    -   Exportar o listado. `backoffice.warranty-claim.list`

### Subseção: Manutenções

Nessa tela pode olhar todas as manutençoes e os estados em que elas estao.

-   Listas todas as manuteções. `backoffice.maintenance.list`
-   Criar Manutenção. `backoffice.maintenance.create`
-   Olhar a transação da manutenção. `backoffice.maintenance.list_ + _premissoes para o show dessa transação`
-   Mudar para Pronto para Pendente de Enderezar. `backoffice.maintenance.from_start`
-   Descartar manutenção. `backoffice.maintenance.discard`


## Seção: CQS Limpeza

### Subseção: Pronto Limpeza e CQS

Nessa subseção se pode olhar as manutenções pendentes de enviar a Limpeza e CQS:

-   Listar as manutenções pendentes de enviar a Limpeza e CQS. `backoffice.maintenance.list`
-   Exportar as manutenções pendentes de enviar a Limpeza e CQS. `backoffice.maintenance.list`
-   Enviar manutenções a Verificação de aparelhos. `backoffice.maintenance.waiting-quality-control.move-to-review`
-   Deshacer a revisão da manutenção. `backoffice.transactions-partner-revisions.rolled-back.do`
-   Olhar o resultado da revisão. `backoffice.transactions-partner-revisions.show`
-   Beeper selection. `backoffice.maintenance.update`

    #### Subseção Pronto Limpeza e CQS: Beeper Selection

-   Exportar itens selecionados: _Sem permissões especiais_
-   Enviar a Limpeza e CQS: `backoffice.maintenance.update`

### Subseção: Limpeza e CQS

Nessa subseção se pode olhar as manutenções de Limpeza e CQS e enviar-las a "Pronto para stock" e "Pendente a Endereçar":

-   Listar as manutenções de Limpeza e CQS. `backoffice.maintenance.list`
-   Exportar as manutenções de Limpeza e CQS. `backoffice.maintenance.list`
-   Enviar manutenções a Verificação de aparelhos. `backoffice.maintenance.in-quality-control.move-to-review`
-   Olhar o resultado da revisão. `backoffice.transactions-partner-revisions.show`
-   Beeper selection. `backoffice.maintenance.update`

    #### Subseção de Limpeza e CQS: Beeper Selection

-   Exportar itens selecionados: _Sem permissões especiais_
-   Enviar a Pronto para Stock: _Sem permissões especiais_
-   Enviar Pendente a Endereçar: _Sem permissões especiais_


## Seção: Desmontagem

Nesta seção se pode olhar tudo los celulares em desmontagem e defeituoso a reparar.

### Subseção: Pendente avaliação-sucata

-   Olhar o pantalla. `backoffice.maintenance.list`
-   Exportar a lista. `backoffice.maintenance.list`
-   No beeper-selection se pode enviar celular ao:
    -   Pendente desmontagem `backoffice.maintenance.update`
    -   Pendente a endereçar sucata `backoffice.maintenance.update`
    -   Defeituoso a reparar `backoffice.maintenance.update`
-   No domínio das acções se pode:
    -   Deshacer revisão. `backoffice.transactions-partner-revisions.rollback`
    -   Enviar pronto para reparo externo. `backoffice.maintenance.update`
    -   Enviar pronto para manutençõ externa. `backoffice.maintenance.update`
    -   Olhar resultado da revisão. `backoffice.transactions-partner-revisions.show`

### Subseção: Defeituoso a reparar

-   Olhar o pantalla. `backoffice.maintenance.list`
-   Exportar a lista. `backoffice.maintenance.list`
-   No beeper-selection se pode enviar celular ao:
    -   Enviar a pronto limpeza e CQS. `backoffice.maintenance.update`
-   No domínio das acções se pode:
    -   Enviar pendente desmontagem. `backoffice.maintenance.update`
    -   Enviar a pendente endereçar sucata `backoffice.maintenance.update`
    -   Olhar resultado da revisão. `backoffice.transactions-partner-revisions.show`

### Subseção: Pendente desmontagem

-   Olhar o pantalla. `backoffice.maintenance.list`
-   Exportar a lista. `backoffice.maintenance.list`
-   No beeper-selection se pode enviar celular ao:
    -   Enviar a pendente endereçar sucata `backoffice.maintenance.update`
    -   Enviar a desmontagem `backoffice.maintenance.update`
-   No domínio das acções se pode:
    -   Olhar resultado da revisão. `backoffice.transactions-partner-revisions.show`

### Subseção: Em desmontagem

-   Olhar o pantalla. `backoffice.maintenance.list`
-   Exportar a lista. `backoffice.maintenance.list`
-   No domínio das acções se pode:
    -   Enviar a pendente endereçar sucata `backoffice.maintenance.update`
    -   Olhar resultado da revisão. `backoffice.transactions-partner-revisions.show`


## Seção: Devoluções

Nesta seção se pode administrar as devoluções.

### Subseção: Razões de retorno
- Olhar o listado de razões de retorno. `backoffice.transactions-return-reasons.list`
- Olhar o detalle de razões de retorno. `backoffice.transactions-return-reasons.show`
- Editar as razões de retorno. `backoffice.transactions-return-reasons.edit`
- Adicionar novas razões de retorno. `backoffice.transactions-return-reasons.create`
- Remover novas razões de retorno. `backoffice.transactions-return-reasons.delete`

### Subseção: Carregar nova devoluçao

-   Olhar o listado das transações. `backoffice.transactions-return-new.list`
-   Olhar o detalhe da transaçaos. `backoffice.transactions-return-new.show`
-   Olhar o pantalla para devoluçao o transaçoe. `backoffice.transactions.return`
-   Carregar devoluçao. `backoffice.transactions.saveReturn`

### Subseção: Enviar código

-   Olhar o listado das transações devolvidas. `backoffice.transactions-return-pending-code.list`
-   Olhar o detalhe da transaçao. `backoffice.transactions-return-pending-code.show`
-   Notificar codigo de postagem enviado. `backoffice.transactions-return-pending-code.sent`
-   Exportar o listado. `backoffice.transactions-return-pending-code.list`

### Subseção: Enviar motoboy

-   Olhar o listado das transações devolvidas. `backoffice.transactions-return-pending-motoboy.list`
-   Olhar o detalhe da transaçao. `backoffice.transactions-return-pending-motoboy.show`
-   Notificar codigo de postagem enviado. `backoffice.transactions-return-pending-motoboy.sent`

### Subseção: Por entrar

-   Olhar o listado das transações devolvidas. `backoffice.transactions-return-arrivals.list`
-   Olhar o detalhe da transaçao. `backoffice.transactions-return-arrivals.show`
-   User beeper-selection. `backoffice.transactions-return-arrivals.received`
-   Notificar recebimento da telefone. `backoffice.transactions-return-arrivals.received`

### Subseção: A revisar

-   Olhar o listado das transações a revisar. `backoffice.transactions-return-revisions.list`
-   Ollhar o detalhe da transaçao. `backoffice.transactions-return-revisions.show`
-   Revisar. `backoffice.transactions-return-revisions.review`

### Subseção: Pendentes BH

-   Olhar o listado das transaçoes a revisar. `backoffice.transactions-return-bh.list`
-   Olhar o detalhe da transaçao. `backoffice.transactions-return-bh.show`
-   Exportar o listado. `backoffice.transactions-return-bh.list`

### Subseção: Pendentes de cancelacion manual

-   Olhar o listado das transaçoes. `backoffice.transactions-return-pending-cancelation.list`
-   Notificar pago devolvido. `backoffice.transactions-return-pending-cancelation.update`

### Subseção: Devoluçoes concluidas

-   Olhar o listado das transaçoes. `backoffice.transactions-return-made.list`
-   Olhar o detalle da transaçao. `backoffice.transactions-return-made.show`
-   Envio de novo. `backoffice.transactions.list` (Transaçoes)
-   Exportar o listado. `backoffice.transactions-return-made.list`


## Seção: Buscador 

### Subseção: Buscador do IMEI
Nessa seção se pode procurar por IMEI a informação de um aparelho e olhar todos os lugares por donde pasou esse aparelho em Trocafone. `backoffice.imei-finder.search`


## Seção: Cadastro Partners

Nessa seção se pode gerir os dados dos partners, partner networks e cupoms de desconto.

### Subseção: Partners

Nessa subseção se pode gerir ou cadastrar os partners que operamos. A continuação segue as funcionalidades disponíveis:

-   Listar os partners. `backoffice.partners.list`
-   Exportar a lista dos partners. `backoffice.partners.list`
-   Olhar detalhe um partner. `backoffice.partners.show`
-   Gerar um novo partner. `backoffice.partners.create`
-   Editar um partner. `backoffice.partners.update`
-   Apagar um partner. `backoffice.partners.delete`
-   (DEPRECATED?) **Ingresar aparelho**: permite introduzir aparelhos manualmente que estão pendentes de retiro para estoque `backoffice.partner-cellphones.update`
-   (DEPRECATED?) **Incoming phones**: permite listar e exportar os aparelhos pendientes de retiro `backoffice.partner-cellphones.list`

#### Lojas Partner

Se pode gerir ou cadastrar as lojas de um partner

-   Listar as lojas. `backoffice.partner-stores.list`
-   Exportar a lista das lojas. `backoffice.partner-stores.list`
-   Olhar detalhe de uma loja. `backoffice.partner-stores.show`
-   Gerar uma nova loja. `backoffice.partner-stores.create`
-   Editar uma loja. `backoffice.partner-stores.update`

#### Usuários Partner

Se pode gerir ou cadastrar os usuários das lojas de um partner

-   Listar os usuários. `backoffice.partner_users.list`
-   Exportar a lista dos usuários. `backoffice.partner_users.list`
-   Olhar detalhe um usuário. `backoffice.partner_users.show`
-   Gerar um novo usuário. `backoffice.partner_users.create`
-   Editar um usuário. `backoffice.partner_users.update`

#### Aumentos

Permite gerir os grupos de aumentos para cada partner. Grupos permitem definir os preços com base no tipo, condição e modelo.

-   Listar os grupos de aumento. `backoffice.partner_increment_groups.list`
-   Olhar detalhe de um grupo de aumento. `backoffice.partner_increment_groups.show`
-   Gerar, editar, ativar ou desativar um grupo de aumento. `backoffice.partner_increment_groups.update`

### Subseção: Partner Networks

Nessa subseção se pode gerir ou cadastrar as redes partner e seus responsávels. A continuação segue as funcionalidades disponíveis:

-   Listar os partner networks. `backoffice.partner-networks.list`
-   Gerar um novo partner network. `backoffice.partner-networks.create`
-   Editar um partner network. `backoffice.partner-networks.update`
-   Apagar um partner network. `backoffice.partner-networks.delete`

#### Responsible Assignments

Permite gerir os responsávels de cada partner da rede

-   Listar, gerar e editar responsávels. `backoffice.partner-networks.responsible-assignments`
-   Apagar responsávels. `backoffice.partner-networks.delete`

### Subseção: Cupons de Desconto

Permite gerir os cupones de desconto da plataforma partner

-   Listar os cupons. `backoffice.promo_codes-partner.list`
-   Exportar a lista dos cupons. `backoffice.promo_codes-partner.list`
-   Olhar detalhe de um cupon. `backoffice.promo_codes-partner.show`
-   Gerar um novo cupon. `backoffice.promo_codes-partner.create`
-   Editar um cupon. `backoffice.promo_codes-partner.update`
-   Apagar um cupon. `backoffice.promo_codes-partner.delete`


## Seção: Marketing 

### Subseção: Cupom de deconto

Nesta subseção se pode criar, editar, olhar e apagar os cupons para o site eCommerce e ePurchase.

-   Olhar o listado dos cupons. `backoffice.promo_codes-marketing.list`
-   Exportar o listado dos cupons. `backoffice.newsletter_subscriptions.list`
-   Olhar o detalhe dum cupom. `backoffice.promo_codes-marketing.show`
-   Criar um novo cupons. `backoffice.promo_codes-marketing.create`
-   Editar um cupons. `backoffice.promo_codes-marketing.update`
-   Apagar um cupons. `backoffice.promo_codes-marketing.destroy`

### Subseção: Subscrições newsletter

Nesta subseção se pode olhar os mails das pessoas subscritas ao newsletter:

-   Olhar o listado das subscrições. `backoffice.newsletter_subscriptions.list`
-   Exportar o listado das subscrições. `backoffice.newsletter_subscriptions.list`
-   Olhar o detalhe duma subscriçõ. `backoffice.newsletter_subscriptions.read`

### Subseção: Banner Home

Nesta subseção se pode edita o banner que aparece na pagina de producto e seu links.

-   Olhar o banner. `backoffice.banners.list`
-   Editar o banner. `backoffice.banners.update`

### Subseção: Banner Carrousel

Nesta subseção se pode criar os banners que são visíveis na home do site.

-   Olhar o listado dos banners do carrousel da home. `backoffice.banners.list`
-   Criar um novo banners do carrousel da home. `backoffice.banners.update`
-   Editar um banner do carrousel da home. `backoffice.banners.update`
-   Apagar um banners do carrousel da home. `backoffice.banners.update`

### Subseção: Banner Marcas

Nesta subseção se pode criar os banners que são visíveis nas páginas das marcas. A continuação segue as funcionalidades disponíveis:

-   Olhar o listado dos banners de marca. `backoffice.brand-banners.list`
-   Olhar o detalhe dum banner de marca. `backoffice.brand-banners.show`
-   Criar um novo banner de marca. `backoffice.brand-banners.create`
-   Editar um banner de marca. `backoffice.brand-banners.update`
-   Apagar um banner de marca. `backoffice.brand-banners.destroy`

### Subseção: Modal RMKT

Nesta subseção se pode editar ou apagar o modal de remarketing `backoffice.rmkt-modal.update`

### Subseção: Badges

Os emblemas que são visíveis nas páginas do produto e sliders produtos em destaque. A continuação segue as funcionalidades disponíveis:

-   Olhar o listado dos badges. `backoffice.badges.list`
-   Olhar o detalhe dum badge. `backoffice.badges.show`
-   Criar um novo badge. `backoffice.badges.create`
-   Editar um badge. `backoffice.badges.update`
-   Apagar um badge. `backoffice.badges.destroy`

### Subseção: Emails

Nesta subseção se pode olhear os emails enviados do site

-   Olhar o listado dos emails. `backoffice.email-templates.list`
-   Olhar um email. `backoffice.email-templates.show`


# Grupos

| Area      | Rol             | Bo Group          | Usuario prueba | Saml_key          |
| --------- | --------------- | ----------------- | -------------- | ----------------- |
| Marketing | Content Manager | Content Marketing |                | content-marketing |

| BO Group          | permissões                                                                                                                                                                             |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Content Marketing | backoffice.brands._ <br /> backoffice.brands.images._ <br /> backoffice.models._ <br /> backoffice.models.images._ <br /> backoffice.descriptions._ <br /> backoffice.specifications._ |