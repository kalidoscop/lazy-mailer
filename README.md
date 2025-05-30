# LazyMailer

## 1 Configuration
```npm install


créer un fichier **.env** à la racine du projet

```PORT=3333
HOST=0.0.0.0
NODE_ENV=development
APP_KEY=4xfhXhMKGj4Hig8zWG34iLHaWJ7z4dZo
DRIVE_DISK=local
DB_CONNECTION=sqlite
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=<votre@gmail.com>
SMTP_PASSWORD=<mote de pass smtp de votre gmail>

Pui lancer cette commande pour terminer la configuration

```npm run config

## 2 Utilisation

Pour envoyer un email

```node ace mailer

Pour lister tous vos email envoyés

```node ace mailer:all