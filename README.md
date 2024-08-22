# Agendo-facil

**Agendo-facil** é um aplicativo desenvolvido em **Next.js** para agendamento de serviços com profissionais. Ele permite que os usuários encontrem profissionais, agendem serviços e gerenciem seus compromissos de forma fácil e eficiente.

## Tecnologias Utilizadas

- **Next.js**: Framework React para desenvolvimento de aplicações web modernas.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Tailwind CSS**: Framework CSS para estilização rápida e eficiente.
- **Prisma**: ORM (Object-Relational Mapping) utilizado para gerenciar o banco de dados.
- **TypeScript**: Superconjunto de JavaScript que adiciona tipos estáticos.
- **React Query**: Gerenciamento de estado assíncrono.
- **Zod/Yup**: Bibliotecas de validação de dados.
- **Sequelize**: ORM para interação com diferentes bancos de dados, como MySQL e PostgreSQL.

## Funcionalidades

- **Busca de Profissionais**: Encontre profissionais de diferentes áreas de serviço.
- **Agendamento de Serviços**: Agende facilmente serviços com os profissionais disponíveis.
- **Gerenciamento de Compromissos**: Veja, edite e cancele compromissos de forma simples.
- **Perfis de Profissionais**: Exiba e edite perfis de profissionais, incluindo valores e duração dos serviços oferecidos.
- **Notificações**: Receba notificações de confirmações, cancelamentos e lembretes de agendamento.
- **Sistema de Avaliações**: Avalie os serviços prestados pelos profissionais.

## Como Rodar o Projeto

### Pré-requisitos

- Node.js v14+ e npm instalados.
- Banco de dados MySQL ou PostgreSQL configurado.

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/wirys/Agendo-Facil
   cd agendo-facil
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:

   Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

   ```bash
   DATABASE_URL=your-database-url
   NEXT_PUBLIC_API_URL=your-api-url
   ```

4. Execute as migrações do banco de dados:

   ```bash
   npx prisma migrate dev
   ```

5. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

6. Acesse o app em `http://localhost:3000`.

## Contribuição

Se você deseja contribuir com o desenvolvimento do Agendo-facil, siga as etapas abaixo:

1. Faça um fork deste repositório.
2. Crie uma nova branch para a sua feature/bugfix (`git checkout -b feature/nome-da-feature`).
3. Commit suas alterações (`git commit -m 'Add some feature'`).
4. Faça o push para a branch (`git push origin feature/nome-da-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Este README serve como um ponto de partida e pode ser ajustado conforme o desenvolvimento do projeto progrida.
