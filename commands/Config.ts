import { BaseCommand } from "@adonisjs/core/build/standalone";
import fs from 'fs'
export default class Config extends BaseCommand {
  /**
   * Command name is used to run the command
   */
  public static commandName = "config";

  /**
   * Command description is displayed in the "help" output
   */
  public static description = "";

  public static settings = {
    /**
     * Set the following value to true, if you want to load the application
     * before running the command. Don't forget to call `node ace generate:manifest`
     * afterwards.
     */
    loadApp: false,

    /**
     * Set the following value to true, if you want this command to keep running until
     * you manually decide to exit the process. Don't forget to call
     * `node ace generate:manifest` afterwards.
     */
    stayAlive: false,
  };

  public async run() {
    // const { default: fs } = await import("fs");
    // const { default: path } = await import("path");

    const selMail = await this.prompt.ask("Votre email");
    const smtpPassword = await this.prompt.ask(
      "Le mot de passe SMTP de votre email"
    );

    const envContent = `
PORT=3333
HOST=0.0.0.0
NODE_ENV=development
APP_KEY=4xfhXhMKGj4Hig8zWG34iLHaWJ7z4dZo
DRIVE_DISK=local
DB_CONNECTION=sqlite
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=${selMail}
SMTP_PASS=${smtpPassword}
`.trim();
//     const envPath = path.join(__dirname, "../.env");

//     fs.writeFile(envPath, envContent, (err) => {
//       if (err) {
//         console.error("❌ Erreur lors de la création du fichier .env :", err);
//       } else {
//         console.log("✅ Fichier .env généré avec succès.");
//       }
//     });;
try {
      fs.writeFileSync('.env', envContent)
      this.logger.success('.env généré avec succès à la racine du projet.')
    } catch (error) {
      this.logger.error(`Erreur lors de la création du fichier : ${error.message}`)
    }
  }
}
