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