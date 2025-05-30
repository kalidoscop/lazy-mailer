import { BaseCommand } from "@adonisjs/core/build/standalone";
import Mail from "@ioc:Adonis/Addons/Mail";

export default class Mailer extends BaseCommand {
  /**
   * Command name is used to run the command
   */
  public static commandName = "mailer";

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
    loadApp: true,

    /**
     * Set the following value to true, if you want this command to keep running until
     * you manually decide to exit the process. Don't forget to call
     * `node ace generate:manifest` afterwards.
     */
    // stayAlive: false,
  };

  public async run() {
    // this.logger.info('Hello world!')
    //  const { default: MailModel } = await import('App/Models/MailModel')
    //  const res = await MailModel.query()
    //  console.log(res);
    const recipientEmail = await this.prompt.ask(
      "Entrer l'email du destinataire"
    );
    const object = await this.prompt.ask("Objet de l'email");
    const content = await this.prompt.ask("Contenu de l'email");
    const { default: MailModel } = await import("App/Models/MailModel");

    await Mail.send((message) => {
      message.to(recipientEmail).subject(object).html(content);
    })
      .then(async () => {
        const mail = new MailModel();
        mail.object = object;
        mail.recipientEmail = recipientEmail;
        mail.content = content;
        await mail.save();
        this.logger.success(`email envoyé à ${recipientEmail} avec succès`);
      })
      .catch((error) => {
        console.log(error);
        this.logger.error(`Erreur lors de l'envoie  de l'email à ${recipientEmail}`);
      });
  }
}
