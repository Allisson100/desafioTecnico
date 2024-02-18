- Não esquecer de mudar o ícone e o título no html
- Organizar CSS
- Organizar IMports
- Não esquecer da página de Erro 404
- Menu responsiuvo Hamburguer para mobile
- Fazer resposivo (Desktop, Celular, Tablet)
- Nao esquecer de altera afont
- Arrumar o botao, pois esta dando overflow no hover
- Refatorar componenetes que se repetem nos cards que tem botao
- Deixar o maximmo semantico possivel
- Arrumar primeiro desafio, pois imagnes estão demorando para carregar

# Commits
### Criar nova branch

git checkout -b develop
git checkout -b feature/nova-feature develop

git add .
git commit -m "Adiciona nova feature"

git checkout develop
git merge --no-ff feature/nova-feature

git checkout main
git merge --no-ff develop

git checkout main
git push origin develop