# 🌟 LazyMailer

Un projet open source pour les paresseux qui veulent envoyer leur email depuis le terminal

---

## 📦 Fonctionnalités

- Envoie de email
- Liste des email envoyé

## Installation
### 1. Cloner le dépôt
```bash
git clone https://github.com/kalidoscop/lazy-mailer.git
```
### 2. Installer les packages
```bash
npm install
```
### 3. créer un fichier **.env** à la racine du projet
```bash
PORT=3333
HOST=0.0.0.0
NODE_ENV=development
APP_KEY=4xfhXhMKGj4Hig8zWG34iLHaWJ7z4dZo
DRIVE_DISK=local
DB_CONNECTION=sqlite
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=<votre@gmail.com>
SMTP_PASSWORD=<mote de pass smtp de votre gmail>

```
### 4. Lancer la configuration
```bash
npm run config

```
---


## Utilisation

### 1. Pour configurer l'editeur de email
```bash
export EDITOR=vim # "nano"
```

### 2. Pour envoyer un email
```bash
node ace mailer
```
### 3. Pour lister tous vos email envoyés
```bash
node ace mailer:all
```