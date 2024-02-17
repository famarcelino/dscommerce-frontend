# Projeto de Conclusão do Curso ReactJS Professional
Este curso é voltado aos profissionais que tem interesse na carreira de front end com ReactJS.
Durante o treinamento é ensinado todo o conceito que envolve o mundo do profissional Front end, desde:
* O básico sobre HTML/CSS
* Javascript/Typescript
* Uso de Hooks do ReactJS como useState, useEffect
* Até a criação de componentes ReactJS e a reutilização desses componentes
* Chamadas de API usando Axios
* Autenticação de usuários usando OAuth2 e token JWT
* Criação de um projeto bem estruturado

O ensino de backend não é foco do curso, mas é disponibilizado um sistema completo desenvolvido em Java Spring Boot que cria todas as rotas e API usadas pelo sistema feito em ReactJS.

## Objetivos do sistema
Esse sistema foi desenvolvido durante todo o curso, e o ojetivo é criar um sistema para ser utilizado como facilitador no processo de aprendizados dos alunos da DevSuperior.
A concepção do sistema parte das premissas:
* Deve ser um sistema que possua um modlo de domínio relativamente simples, porém abrangente, ou seja, que explore vários tipos de relacionamentos entre as entidades de negócio (muitos-para-um, muitos-para-muitos, etc).
* O sistema deve possibilitar a aplicação de vários conhecimentos importantes das disciplinas de fundamentos.
* O sistema deve conter as principais funcionalidades que se espera de um profissional iniciante deve saber construir, tais como telas de cadastro e fluxos de caso de uso.

## Visão geral do sistema
O sistema criado é uma loja eletrônica que apresenta um catálogo de produtos em que o cliente possa selecionar e obter mais detalhes e em caso de compra é direcionado para uma tela de login para que ele possa se autenticar. Como é tudo fictício não há integração com meios de pagamentos.
Após clicar no botão de comprar o ícone do carrinho é atualizado com a quantidade e produtos selecionados, o cliente pode clicar no botão finalizar compra e o ícone do carrinho é atualizado para zero produtos, muito parecido com o comportamento dos sistemas existentes das lojas eletrônicas atuais.
Além da visão do cliente, foi criado também uma área administrativa no qual o administrador pode editar, excluir ou atualizar um produto (um sistema CRUD completo), o sistema faz diversas validações para garantir principalmente que um produto não seja indevidamente excluído em caso de já ter sido vendido ou ter pedidos em aberto.

## Conclusão
O profissional iniciante em Front end tem nesse treinamento um conteúdo muito abrangente das principais tecnologias usadas para criar uma solução bem estruturada (o professor Nélio procura dar um enfoque muito grande em criar sempre um projeto bem estruturado, isso facilita tanto a vida do desenvolvedor quanto de quem posteriormente vai ter que fazer manutenções no sistema), vai aprender como trabalhar com componentes ReactJS, criação de formulários e validação de campos.
Uma dica muito interessante que o Nélio apresenta é tentar não deixar o projeto com lock in, ou seja, não ficar preso há uma biblioteca que mais tarde é descontinuada, mas não desincentiva o uso dessas bibliotecas, apenas apresentou as vantagens e desvantagens.
Para mim o curso é excelente e valeu muito a pena.